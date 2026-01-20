"use client"

import { MessageSquare, FileQuestion, Calendar, BarChart3, Bot } from "lucide-react"

const projects = [
  {
    id: 1,
    icon: <MessageSquare className="w-10 h-10" />,
    title: "Аналог JivoSite",
    subtitle: "Чат-консультант для сайта",
    description: "Полноценный онлайн-консультант с чатом, историей диалогов, уведомлениями и интеграцией с CRM",
    tech: ["WebSocket", "React", "Database", "API"],
    color: "#00ff88",
    complexity: "Средняя сложность",
    duration: "3-4 недели",
  },
  {
    id: 2,
    icon: <FileQuestion className="w-10 h-10" />,
    title: "Аналог MarQuiz",
    subtitle: "Квиз-лид-магнит",
    description: "Интерактивные квизы для лендингов с логикой ветвления, сбором данных и интеграцией с email-сервисами",
    tech: ["TypeScript", "Form Logic", "Email API", "Analytics"],
    color: "#ffd700",
    complexity: "Простая",
    duration: "2 недели",
  },
  {
    id: 3,
    icon: <Calendar className="w-10 h-10" />,
    title: "SMM-планировщик",
    subtitle: "Автопостинг в соцсети",
    description: "Планирование и автопубликация постов в Telegram, VK, с предпросмотром, календарем и аналитикой",
    tech: ["Telegram API", "VK API", "Scheduler", "Cloud"],
    color: "#00d4ff",
    complexity: "Высокая сложность",
    duration: "4-5 недель",
  },
  {
    id: 4,
    icon: <BarChart3 className="w-10 h-10" />,
    title: "Веб-аналитика сайта",
    subtitle: "Собственная система аналитики",
    description: "Dashboard с посещениями, событиями, воронками, без зависимости от Google Analytics",
    tech: ["Tracking Script", "PostgreSQL", "Dashboard", "Charts"],
    color: "#ff4444",
    complexity: "Высокая сложность",
    duration: "5-6 недель",
  },
  {
    id: 5,
    icon: <Bot className="w-10 h-10" />,
    title: "ИИ продавец чат-бот",
    subtitle: "Бот-консультант с AI",
    description: "Умный ассистент с обучением на базе знаний, интеграцией Claude/GPT, памятью контекста",
    tech: ["Claude API", "Vector DB", "NLP", "Telegram Bot"],
    color: "#a855f7",
    complexity: "Высокая сложность",
    duration: "4-5 недель",
  },
]

export function ProjectsSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#00ff88 1px, transparent 1px),
            linear-gradient(90deg, #00ff88 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-[#00ff88] text-sm tracking-widest mb-4">ЧТО МЫ СОЗДАЁМ</p>
        <h2 className="text-3xl md:text-5xl text-white mb-6">
          5 реальных IT-проектов за 3 месяца
        </h2>
        <p className="text-xl text-[#888] mb-16 max-w-3xl">
          Не учебные задачки — полноценные сервисы, которые можно продавать, внедрять клиентам или запускать как SaaS
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#333] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)] hover:transform hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div 
                className="mb-6 group-hover:scale-110 transition-transform duration-500"
                style={{ color: project.color }}
              >
                {project.icon}
              </div>
              
              {/* Header */}
              <h3 className="text-white text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-[#888] text-sm mb-4">
                {project.subtitle}
              </p>
              
              {/* Description */}
              <p className="text-[#ccc] text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-[#666] text-xs mb-2">Технологии:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 border border-[#333] text-[#888] hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Footer info */}
              <div className="flex items-center justify-between text-xs border-t border-[#222] pt-4">
                <span 
                  className="font-bold"
                  style={{ color: project.color }}
                >
                  {project.complexity}
                </span>
                <span className="text-[#666]">
                  {project.duration}
                </span>
              </div>
            </div>
          ))}
          
          {/* Summary card */}
          <div className="bg-gradient-to-br from-[#00ff88]/10 to-[#00d4ff]/10 border-2 border-[#00ff88] p-8 flex flex-col justify-center items-center text-center hover:shadow-[0_0_40px_rgba(0,255,136,0.2)] transition-all duration-500 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: "500ms" }}>
            <p className="text-[#00ff88] text-6xl font-bold mb-4">5</p>
            <p className="text-white text-xl font-bold mb-2">готовых проектов</p>
            <p className="text-[#ccc] text-sm mb-6">
              В портфолио и для продажи
            </p>
            <div className="space-y-2 text-left w-full">
              <div className="flex items-center gap-2 text-sm text-[#888]">
                <span className="text-[#00ff88]">✓</span>
                <span>Исходный код</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#888]">
                <span className="text-[#ffd700]">✓</span>
                <span>Документация</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#888]">
                <span className="text-[#00d4ff]">✓</span>
                <span>Деплой в облаке</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#888]">
                <span className="text-[#ff4444]">✓</span>
                <span>Готовность к продаже</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
