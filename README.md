# Mining-Dev.ru

Персональный сайт разработчика программных решений для горно-геологической отрасли.

## Локальный запуск

Требуется Node.js 22.12+ и npm.

```bash
npm install
npm run dev
```

## Проверка и сборка

```bash
npm run build
npm run preview
```

Готовый статический сайт создаётся в `dist/`.

## Публикация

Проект настроен для GitHub Pages и домена `mining-dev.ru`. Workflow `.github/workflows/deploy.yml` собирает и публикует сайт при отправке изменений в ветку `main`. В настройках репозитория GitHub Pages должен быть выбран источник **GitHub Actions**.

## Статьи

Статьи блога хранятся в `src/content/blog/` в формате Markdown. Пример метаданных:

```yaml
---
title: "Заголовок статьи"
description: "Краткое описание статьи."
pubDate: 2026-11-09
category: "Разработка ГГИС"
tags:
  - Python
  - ГГИС
draft: true
---
```

Для публикации установите `draft: false`. Страницы статей и список публикаций формируются автоматически.

## Технологии

- Astro
- TypeScript
- Tailwind CSS v4
- Astro Content Collections
- GitHub Actions / GitHub Pages
