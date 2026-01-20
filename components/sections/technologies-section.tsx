"use client"

const technologies = [
  {
    category: "ИИ и Ассистенты",
    color: "#a855f7",
    items: [
      { name: "Claude (Anthropic)", icon: "🧠", description: "ИИ-ассистент для кода" },
      { name: "GitHub Copilot", icon: "🤖", description: "Автодополнение кода" },
      { name: "Cursor IDE", icon: "✨", description: "ИИ-редактор кода" },
      { name: "v0 by Vercel", icon: "🎨", description: "Генерация UI компонентов" },
    ],
  },
  {
    category: "Разработка",
    color: "#00ff88",
    items: [
      { name: "Visual Studio Code", icon: "💻", description: "Основная IDE" },
      { name: "TypeScript", icon: "📘", description: "Типизированный JS" },
      { name: "React / Next.js", icon: "⚛️", description: "Frontend фреймворки" },
      { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS" },
      { name: "Python", icon: "🐍", description: "Backend и скрипты" },
    ],
  },
  {
    category: "Базы данных",
    color: "#00d4ff",
    items: [
      { name: "PostgreSQL", icon: "🐘", description: "Реляционная БД" },
      { name: "Supabase", icon: "⚡", description: "Backend as a Service" },
      { name: "SQL", icon: "💾", description: "Язык запросов" },
      { name: "Prisma ORM", icon: "🔷", description: "TypeScript ORM" },
    ],
  },
  {
    category: "Интеграции и API",
    color: "#ffd700",
    items: [
      { name: "REST API", icon: "🔌", description: "Архитектура API" },
      { name: "Telegram Bot API", icon: "✈️", description: "Создание ботов" },
      { name: "Stripe/PayPal", icon: "💳", description: "Приём платежей" },
      { name: "Email API", icon: "📧", description: "SendGrid, Resend" },
    ],
  },
  {
    category: "Деплой и DevOps",
    color: "#ff4444",
    items: [
      { name: "GitHub", icon: "🐙", description: "Версионирование кода" },
      { name: "Docker", icon: "🐳", description: "Контейнеризация" },
      { name: "Vercel", icon: "▲", description: "Деплой фронтенда" },
      { name: "Railway", icon: "🚂", description: "Деплой бэкенда" },
    ],
  },
  {
    category: "Аналитика и SEO",
    color: "#00ff88",
    items: [
      { name: "Google Analytics", icon: "📊", description: "Веб-аналитика" },
      { name: "Metrika", icon: "📈", description: "Яндекс.Метрика" },
      { name: "Плагины SEO", icon: "🔍", description: "Next.js SEO" },
      { name: "Open Graph", icon: "🖼️", description: "Мета-теги для соцсетей" },
    ],
  },
]

export function TechnologiesSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-24 bg-[#050505] relative overflow-hidden">
      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #00ff88 0px, #00ff88 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(90deg, #00ff88 0px, #00ff88 1px, transparent 1px, transparent 60px)
          `,
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-[#00d4ff] text-sm tracking-widest mb-4">ТЕХНОЛОГИИ</p>
        <h2 className="text-3xl md:text-5xl text-white mb-6">
          Стек современного вайбкодера
        </h2>
        <p className="text-xl text-[#888] mb-16 max-w-3xl">
          Не просто изучение — реальное применение инструментов, с которыми работают в 2026 году
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((category, catIndex) => (
            <div 
              key={catIndex}
              className="bg-[#0a0a0a] border border-[#222] p-6 hover:border-[#333] transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${catIndex * 100}ms`,
              }}
            >
              <h3 
                className="text-lg font-bold mb-6 pb-3 border-b-2"
                style={{ 
                  color: category.color,
                  borderColor: category.color + "40",
                }}
              >
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="group flex items-start gap-3 p-3 hover:bg-[#111] transition-all duration-300 cursor-default border border-transparent hover:border-[#222]"
                  >
                    <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm mb-1 group-hover:text-[#00ff88] transition-colors">
                        {tech.name}
                      </p>
                      <p className="text-[#666] text-xs leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom summary */}
        <div className="mt-16 bg-gradient-to-r from-[#00ff88]/5 to-[#00d4ff]/5 border-l-4 border-[#00ff88] p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-[#00ff88] text-3xl font-bold mb-2">30+</p>
              <p className="text-white font-medium mb-1">Инструментов</p>
              <p className="text-[#888] text-sm">От базовых до продвинутых</p>
            </div>
            <div>
              <p className="text-[#ffd700] text-3xl font-bold mb-2">100%</p>
              <p className="text-white font-medium mb-1">Практика</p>
              <p className="text-[#888] text-sm">Каждый инструмент в деле</p>
            </div>
            <div>
              <p className="text-[#00d4ff] text-3xl font-bold mb-2">6 мес</p>
              <p className="text-white font-medium mb-1">От нуля до продакшна</p>
              <p className="text-[#888] text-sm">Полный стек разработки</p>
            </div>
          </div>
        </div>
        
        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-[#666] text-sm">
            💡 Все инструменты изучаются в контексте реальных проектов, а не отдельными курсами
          </p>
        </div>
      </div>
    </section>
  )
}
