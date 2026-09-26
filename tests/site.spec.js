import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('production content, contacts, prices and unavailable service', async ({ page, request }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error' || message.type() === 'warning') errors.push(message.text());
  });
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'ru-RU');
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page).toHaveTitle(/PandaHelp/);
  await expect(page.locator('.about-identity')).toContainText('Фархат');
  await expect(page.locator('body')).not.toContainText('PandaMan');
  const hrefs = await page
    .locator('a')
    .evaluateAll((links) => links.map((link) => link.getAttribute('href')));
  expect(hrefs).toContain('https://t.me/Pandammann');
  expect(hrefs).toContain('tel:+77082192045');
  expect(hrefs).toContain('mailto:farhatnurzhan@gmail.com');
  const whatsapp = hrefs.filter((href) => href.startsWith('https://wa.me/'));
  expect(whatsapp.length).toBeGreaterThan(0);
  for (const href of whatsapp) {
    expect(new URL(href).pathname).toBe('/77082192045');
    expect(new URL(href).searchParams.get('text')).toBe(
      'Здравствуйте! Пишу с сайта PandaHelp. Нужна помощь.',
    );
  }
  for (const hash of new Set(hrefs.filter((href) => href.startsWith('#'))))
    await expect(page.locator(hash)).toHaveCount(1);
  await expect(page.locator('#go')).toContainText('Временно недоступна');
  await expect(page.locator('#go a, #go button, #go form')).toHaveCount(0);
  const prices = await page.locator('.price-row').evaluateAll((rows) =>
    rows.map((row) => ({
      label: row.querySelector('dt').textContent,
      price: row.querySelector('dd').textContent.replace(/\s/g, ' '),
    })),
  );
  expect(prices).toEqual([
    { label: 'Небольшая тема или простая задача', price: 'от 1 500 ₸' },
    { label: 'Разбор лабораторной', price: 'от 2 500 ₸' },
    { label: 'Подготовка к защите готовой работы', price: 'от 2 000 ₸' },
    { label: 'Большая или сложная лабораторная', price: 'от 3 500 ₸' },
    { label: 'Разбор + подготовка к защите', price: 'от 4 000 ₸' },
    { label: 'Помощь с отчётом', price: 'от 1 500 ₸' },
    { label: 'Простая удалённая помощь', price: 'от 1 500 ₸' },
    { label: 'Установка и настройка программы', price: 'от 2 000 ₸' },
    { label: 'Среда Python / Node.js / VS Code', price: 'от 2 500 ₸' },
    { label: 'Исправление программной ошибки', price: 'от 2 000 ₸' },
    { label: 'Базовая настройка Git / GitHub / SSH', price: 'от 2 000 ₸' },
    { label: 'Настройка PostgreSQL / MySQL', price: 'от 2 500 ₸' },
    { label: 'Полная среда для учёбы и разработки', price: 'от 3 500 ₸' },
  ]);
  for (const asset of ['/favicon.svg', '/og-image.png', '/robots.txt'])
    expect((await request.get(asset)).ok()).toBeTruthy();
  expect(errors).toEqual([]);
});

for (const width of [360, 390, 430, 768, 1440, 1920]) {
  test(`layout and accessibility at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const overflow = await page.evaluate(() => ({
      page: document.documentElement.scrollWidth,
      viewport: innerWidth,
    }));
    expect(overflow.page).toBeLessThanOrEqual(overflow.viewport);
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'])
      .analyze();
    expect(result.violations).toEqual([]);
    if (width < 760) {
      const contacts = page.getByRole('navigation', { name: 'Связаться', exact: true });
      await expect(contacts).toBeVisible();
      for (const button of await contacts.getByRole('link').all()) {
        const box = await button.boundingBox();
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
      await page.getByRole('link', { name: 'Наверх', exact: true }).scrollIntoViewIfNeeded();
      const footer = await page.locator('.site-footer .text-link').boundingBox();
      const bar = await contacts.boundingBox();
      expect(footer.y + footer.height).toBeLessThanOrEqual(bar.y);
    }
  });
}

test('mobile menu closes on Escape, navigation, outside click and desktop resize', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const button = page.getByRole('button', { name: 'Меню', exact: true });
  await button.click();
  const close = page.getByRole('button', { name: 'Закрыть меню', exact: true });
  await expect(close).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(button).toBeFocused();
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await button.click();
  await page
    .getByRole('navigation', { name: 'Основная навигация' })
    .getByRole('link', { name: 'Цены', exact: true })
    .click();
  await expect(page).toHaveURL(/#prices$/);
  await expect(page.locator('#prices')).toBeFocused();
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await button.click();
  await page.locator('#prices h2').click();
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await button.click();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(button).toHaveAttribute('aria-expanded', 'false');
});

test('keyboard navigation and native disclosures', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Перейти к содержанию' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  const summary = page
    .locator('#faq summary')
    .filter({ hasText: 'Можно сначала просто скинуть проблему?' });
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(
    page.locator('#faq details').filter({ hasText: 'Можно сначала просто скинуть проблему?' }),
  ).toHaveAttribute('open', '');
  await page.keyboard.press('Enter');
  await expect(
    page.locator('#faq details').filter({ hasText: 'Можно сначала просто скинуть проблему?' }),
  ).not.toHaveAttribute('open');
  const priceGroup = page
    .locator('.price-group')
    .filter({ has: page.getByRole('heading', { name: 'PandaStudy', exact: true }) });
  await priceGroup.locator('summary').click();
  await expect(priceGroup.getByText('Разбор + подготовка к защите', { exact: true })).toBeVisible();
});

test('static page and FAQ work without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4173');
  await expect(page.locator('h1')).toContainText('С IT бывает сложно.');
  await expect(page.locator('#contact a[href="https://t.me/Pandammann"]')).toBeVisible();
  await page
    .locator('#faq summary')
    .filter({ hasText: 'Можно сначала просто скинуть проблему?' })
    .click();
  await expect(page.locator('#faq details[open]')).toContainText('Первичная оценка бесплатная');
  await context.close();
});

test('reduced motion is respected', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  expect(
    await page.locator('html').evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe('auto');
});

test('mobile disclosure puts navigation in the keyboard path', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Меню', exact: true });
  await menu.focus();
  await page.keyboard.press('Enter');
  await page.keyboard.press('Tab');
  await expect(
    page
      .getByRole('navigation', { name: 'Основная навигация' })
      .getByRole('link', { name: 'Услуги', exact: true }),
  ).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
});
