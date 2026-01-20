# Betelgeuse Landing Page - Production Deployment

## 📋 Описание проекта

Landing page на базе Next.js 16 с использованием:
- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** компоненты
- **pnpm** как менеджер пакетов

## 🚀 Локальная разработка

### Установка зависимостей
```bash
pnpm install
```

### Запуск dev сервера
```bash
pnpm dev
```
Приложение будет доступно на http://localhost:3000

### Сборка production версии
```bash
pnpm build
pnpm start
```

## 🐳 Docker Development

### Сборка образа
```bash
docker build -t betelgeuse-landing-page:latest .
```

### Запуск контейнера
```bash
docker run -d -p 3000:3000 --name betelgeuse-landing betelgeuse-landing-page:latest
```

### Или используя docker-compose
```bash
docker-compose up -d
```

### Остановка контейнера
```bash
docker stop betelgeuse-landing
docker rm betelgeuse-landing
```

## 📦 Production Deployment

### Вариант 1: Docker Registry
```bash
# Тегирование для registry
docker tag betelgeuse-landing-page:latest your-registry.com/betelgeuse-landing-page:latest

# Push в registry
docker push your-registry.com/betelgeuse-landing-page:latest

# На production сервере
docker pull your-registry.com/betelgeuse-landing-page:latest
docker run -d -p 80:3000 --name betelgeuse-landing --restart unless-stopped your-registry.com/betelgeuse-landing-page:latest
```

### Вариант 2: Deploy на Vercel
```bash
# Установить Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Вариант 3: Deploy на любом VPS/Cloud
```bash
# 1. Склонировать репозиторий
git clone <your-repo-url>
cd betelgeuse-landing-page

# 2. Собрать и запустить через docker-compose
docker-compose up -d

# 3. Настроить nginx reverse proxy (опционально)
```

## 🔧 Конфигурация

### Переменные окружения
Создайте файл `.env.local` для локальной разработки:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Добавьте другие переменные по необходимости
```

### Production переменные
В production установите:
```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📊 Мониторинг и логи

### Docker логи
```bash
docker logs betelgeuse-landing -f
```

### Docker stats
```bash
docker stats betelgeuse-landing
```

## 🔒 Безопасность

- Образ запускается от non-root пользователя (nextjs:nodejs)
- Используется multi-stage build для минимального размера образа
- Все зависимости устанавливаются с frozen-lockfile

## 📈 Оптимизация

- Standalone output для минимального размера
- Image optimization отключена (можно включить при необходимости)
- TypeScript build errors игнорируются (настроить проверки перед деплоем)

## 🛠️ Полезные команды

```bash
# Проверка размера образа
docker images betelgeuse-landing-page

# Inspect контейнера
docker inspect betelgeuse-landing

# Войти в контейнер
docker exec -it betelgeuse-landing sh

# Удалить все связанные ресурсы
docker-compose down
docker rmi betelgeuse-landing-page:latest
```

## 📝 Заметки

- Порт по умолчанию: 3000
- Healthcheck настроен с интервалом 30 секунд
- Restart policy: unless-stopped
- Build time: ~2-3 минуты

## 🤝 Поддержка

Для вопросов и проблем создайте issue в репозитории.
