import { readFile, writeFile } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer, loadEnv } from 'vite';

// A single static page needs no server at runtime. Keep its content useful without JS.
const server = await createServer({
  server: { middlewareMode: true, ws: false, hmr: false },
  appType: 'custom',
});
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  let html = await readFile('dist/index.html', 'utf8');
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${renderToString(createElement(App))}</div>`,
  );
  const env = { ...loadEnv('production', process.cwd(), ''), ...process.env };
  const rawUrl = env.SITE_URL || env.CF_PAGES_URL;
  const escape = (value) =>
    value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  let robots = 'User-agent: *\nAllow: /\n';
  if (rawUrl) {
    const url = new URL(rawUrl);
    if (
      !['http:', 'https:'].includes(url.protocol) ||
      url.username ||
      url.password ||
      url.pathname !== '/' ||
      url.search ||
      url.hash
    ) {
      throw new Error(
        'SITE_URL must be an HTTP(S) origin without credentials, path, query, or hash.',
      );
    }
    const origin = url.origin;
    html = html.replace(
      '<!--deployment-meta-->',
      `<link rel="canonical" href="${escape(origin)}/" />\n<meta property="og:url" content="${escape(origin)}/" />`,
    );
    html = html.replace('content="/og-image.png"', `content="${escape(origin)}/og-image.png"`);
    await writeFile(
      'dist/sitemap.xml',
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(origin)}/</loc></url></urlset>\n`,
    );
    robots += `Sitemap: ${origin}/sitemap.xml\n`;
  } else {
    html = html.replace('<!--deployment-meta-->', '');
    console.info(
      'SITE_URL is not set: canonical and sitemap will be added when the deployment URL is known.',
    );
  }
  await writeFile('dist/index.html', html);
  await writeFile('dist/robots.txt', robots);
  console.info('Static HTML generated. All content and contact links work without JavaScript.');
} finally {
  await server.close();
}
