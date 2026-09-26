# PandaHelp

Небольшой персональный сервис IT-помощи: разбор учебных работ (PandaStudy) и удалённая настройка программ (PandaRemote). PandaGo временно недоступен. Требования: [PANDAHELP_PROJECT_SPEC.md](PANDAHELP_PROJECT_SPEC.md).

React, Vite, JavaScript и обычный CSS. Без сервера, базы данных и внешних шрифтов. Production-сборка предварительно рендерит страницу в HTML: тексты, ссылки и FAQ доступны без JavaScript.

## Запуск

Нужен Node.js 22.12+ (версия для проекта записана в `.node-version`).

```bash
npm ci
npm run dev
```

Сайт: http://localhost:5173.

```bash
npm run lint
npm run build
npm run preview
```

Production-превью: http://localhost:4173. Публикуется только папка `dist/`.

## Редактирование

- `src/content/ru.js`: тексты, контакты, услуги, цены и FAQ; locale `ru-RU`. Для будущих языков можно добавить соседние файлы и выбирать один словарь.
- `copy.offer.enabled`: выключите после первых пяти клиентов. Счётчика клиентов нет; скидку подтверждает владелец.
- `src/components/`: смысловые разделы, `src/styles.css`: оформление и адаптивность.
- `index.html`: SEO-тексты. `public/og-image.png`: изображение для ссылок, исходник — `public/og-image.svg`.

## Проверки

```bash
npx playwright install chromium
npm test
```

Тесты самостоятельно собирают и запускают production-версию. Проверяют контакты и цены, навигацию, FAQ, отсутствие переполнения на 360/390/430/768/1440/1920 px, ошибки браузера, доступность через axe и работу без JavaScript. Автоматические проверки дополняются визуальным просмотром.

## Cloudflare Pages

Подключите репозиторий к Pages: preset **React (Vite)**, build command **`npm run build`**, output directory **`dist`**, корень проекта — корень репозитория. Node.js 22.12+.

В переменной **`SITE_URL`** укажите реальный основной адрес сайта, например выданный Pages адрес, без пути и параметров. Сборка создаст canonical, абсолютные Open Graph URL, `robots.txt` и `sitemap.xml`. Если `SITE_URL` не задан, используется `CF_PAGES_URL`. Локальная сборка без адреса работает, но canonical и sitemap не создаёт: вымышленного домена в проекте нет. После подключения своего домена обновите `SITE_URL` и пересоберите сайт.

Альтернатива: соберите локально с `SITE_URL` и загрузите папку `dist` через Direct Upload. Настройки кеширования и заголовки безопасности находятся в `public/_headers`. Секреты для работы сайта не нужны. Аналитика, cookies и формы сбора данных не подключены.

Перед публикацией проверьте актуальность акции и откройте чат Telegram/WhatsApp с собственного телефона: ссылки ведут прямо на контакты, сообщения автоматически не отправляются.

Документация: [Cloudflare — параметры сборки](https://developers.cloudflare.com/pages/configuration/build-configuration/), [Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/), [Vite](https://vite.dev/guide/).
