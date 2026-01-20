"use client"

import { MiniCTA } from "@/components/mini-cta"

const projects = [
  {
    name: "Veeneo",
    url: "https://veeneo.ru/",
    type: "SaaS для маркетинг-аналитики",
    desc: "Платформа для сквозной аналитики: ETL, трансформация данных, дашборды",
    clients: ["ЛАНИТ", "McDonald's", "FunSun"],
    benefits: [
      "Вся аналитика в одном месте",
      "Не нужны программисты для интеграций",
      "Решения на основе данных",
    ],
    color: "#00ff88",
  },
  {
    name: "UTM Метки",
    url: "https://utmmetki.ru/",
    type: "Конструктор для маркетологов",
    desc: "Конструктор UTM параметров + виджет видео-звонка",
    clients: ["Фрилансеры", "Агентства", "Маркетологи"],
    benefits: [
      "Экономия 30 минут в неделю",
      "Встроенный видео-звонок",
      "Монетизация через подписку",
    ],
    color: "#ffd700",
  },
  {
    name: "Task Tracker",
    url: "http://treker-zadachek.ru/",
    type: "Трекер задач",
    desc: "Система управления задачами — легче, чем Asana",
    clients: ["Стартапы", "Маленькие команды", "Фрилансеры"],
    benefits: [
      "Понять, кто и что делает",
      "Не терять задачи в чатах",
      "Работать без хаоса",
    ],
    color: "#00d4ff",
  },
]

export function ProofSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-24 bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#00ff88] text-sm tracking-widest mb-4">ДОКАЗАТЕЛЬСТВА</p>
        <h2 className="text-3xl md:text-4xl text-white mb-4">Это не теория</h2>
        <p className="text-xl text-[#888] mb-16">
          Это то, что я создал сам за 2 года вайбкодинга.
        </p>
        
        <div className="space-y-8 mb-16">
          {projects.map((project) => (
            <div 
              key={project.name}
              className="bg-[#0a0a0a] border border-[#222] p-6 md:p-8 hover:border-[#333] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Left side - info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <h3 className="text-2xl text-white">{project.name}</h3>
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00d4ff] text-sm hover:underline"
                    >
                      {project.url.replace('https://', '').replace('http://', '').replace('/', '')}
                    </a>
                  </div>
                  
                  <p style={{ color: project.color }} className="text-lg mb-2">{project.type}</p>
                  <p className="text-[#888] mb-6">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.clients.map((client) => (
                      <span 
                        key={client}
                        className="border border-[#333] px-3 py-1 text-sm text-[#888]"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Right side - benefits */}
                <div className="md:w-64 space-y-2">
                  <p className="text-[#666] text-sm mb-3">Что получили пользователи:</p>
                  {project.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <span style={{ color: project.color }}>→</span>
                      <span className="text-[#ccc] text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary */}
        <div className="border border-[#00ff88] bg-[#0a0a0a] p-8">
          <h3 className="text-xl text-white mb-6">Все 3 сервиса — примеры того, что получат участники</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <p className="text-[#00ff88] text-2xl font-bold mb-1">3</p>
              <p className="text-[#888] text-sm">работающих сервиса</p>
            </div>
            <div>
              <p className="text-[#00ff88] text-2xl font-bold mb-1">$</p>
              <p className="text-[#888] text-sm">генерируют доход</p>
            </div>
            <div>
              <p className="text-[#00ff88] text-2xl font-bold mb-1">B2B</p>
              <p className="text-[#888] text-sm">платящие клиенты</p>
            </div>
            <div>
              <p className="text-[#00ff88] text-2xl font-bold mb-1">24/7</p>
              <p className="text-[#888] text-sm">работают автономно</p>
            </div>
          </div>
          
          <div className="border-t border-[#333] pt-6">
            <p className="text-white text-lg mb-2">
              <span className="text-[#ffd700]">Факт:</span> Я создал их как маркетолог, не как программист.
            </p>
            <p className="text-[#00ff88]">
              <span className="text-[#ffd700]">Вывод:</span> Если я это создал за 2 года — ты сможешь за 6 месяцев с поддержкой.
            </p>
          </div>
        </div>
        
        {/* TG Blog */}
        <div className="mt-12 bg-[#0a0a0a] border border-[#333] p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-[#00ff88] text-xl mb-2">@business_metric</h3>
              <p className="text-[#888]">
                Вайбкодинг дневник — реальный процесс создания этих сервисов: промпты для AI, ошибки, демо, доход.
              </p>
            </div>
            <a 
              href="https://t.me/business_metric" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-[#00ff88] text-[#00ff88] px-6 py-3 hover:bg-[#00ff88] hover:text-black transition-colors text-center"
            >
              Подписаться
            </a>
          </div>
        </div>
        
        <MiniCTA />
      </div>
    </section>
  )
}
