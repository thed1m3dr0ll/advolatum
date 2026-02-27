# ADVOLATUM

> Российский стритвер-бренд нового поколения

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-38BDF8?style=flat-square&logo=tailwindcss)

## Стек технологий

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Структура проекта

```
advolatum/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Главная страница
│   │   ├── layout.tsx            # Корневой лейаут
│   │   ├── globals.css           # Глобальные стили
│   │   ├── catalog/
│   │   │   ├── page.tsx          # Страница каталога
│   │   │   └── [slug]/page.tsx   # Страница товара
│   │   ├── cart/page.tsx         # Корзина
│   │   └── about/page.tsx        # О бренде
│   ├── components/
│   │   ├── Header.tsx            # Шапка с навигацией
│   │   ├── Footer.tsx            # Подвал
│   │   └── home/
│   │       ├── HeroSection.tsx     # Главный баннер
│   │       ├── CollectionSlider.tsx # Слайдер коллекций
│   │       ├── ProductsSection.tsx  # Секция товаров
│   │       └── ContactsSection.tsx  # Контакты
│   └── context/
│       └── CartContext.tsx       # Глобальный стейт корзины
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

## Цветовая схема

| Переменная | Значение | Описание |
|---|---|---|
| `adv-dark` | `#0E141C` | Основной фон |
| `adv-dark-secondary` | `#0A0F14` | Вторичный фон |
| `adv-accent` | `#C8FF00` | Акцентный цвет |
| `adv-gray` | `#6B7280` | Текст подзаголовка |
| `adv-border` | `#1E2833` | Цвет рамок |

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Режим разработки
npm run dev

# Сборка для продакшна
npm run build

# Запуск продакшна
npm run start
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Страницы

| Путь | Описание |
|---|---|
| `/` | Главная страница |
| `/catalog` | Каталог товаров |
| `/catalog/[slug]` | Страница товара |
| `/cart` | Корзина |
| `/about` | О бренде |

## Деплоймент

Проект готов к деплойменту на **Vercel**:

```bash
npx vercel
```

Или подключите репозиторий на [vercel.com](https://vercel.com) для автматического деплоймента.
