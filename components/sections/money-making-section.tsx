"use client"

import { DollarSign, Database, Plug, TrendingUp } from "lucide-react"

const moneyMakingWays = [
  {
    id: 1,
    icon: <DollarSign className="w-8 h-8" />,
    title: "Продажа готовых решений",
    examples: [
      "Шаблоны лендингов или сайты",
      "Базы данных с аналитикой",
      "Dashboard'ы для стартапов",
    ],
    potential: "от 30,000₽ до 300,000₽",
    reality: "Участник создал 8 шаблонов за 3 месяца — заработал 180,000₽",
    color: "#00ff88",
  },
  {
    id: 2,
    icon: <Plug className="w-8 h-8" />,
    title: "Заработок на интеграциях",
    examples: [
      "AmoCRM + Битрикс24",
      "Telegram боты + CRM",
      "API между сервисами",
    ],
    potential: "3,000₽ - 25,000₽ за интеграцию",
    reality: "5 интеграций в месяц = 75,000₽ дохода",
    color: "#ffd700",
  },
  {
    id: 3,
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Подписка на свой SaaS",
    examples: [
      "Аналитика и автоматизация",
      "CRM для ниши",
      "Инструменты для бизнеса",
    ],
    potential: "5,000₽ - 50,000₽/месяц recurring",
    reality: "15 платящих клиентов по 5,000₽ = 75,000₽/мес = 900,000₽/год",
    color: "#00d4ff",
  },
  {
    id: 4,
    icon: <Database className="w-8 h-8" />,
    title: "Консалтинг + внедрение",
    examples: [
      "Digital трансформация бизнеса",
      "Автоматизация процессов",
      "Создание IT-инфраструктуры",
    ],
    potential: "150,000₽ - 800,000₽ за проект",
    reality: "1 проект в месяц = 1,800,000₽/год",
    color: "#ff4444",
  },
]

export function MoneyMakingSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-24 bg-[#050505] relative overflow-hidden">
      {/* Background effect */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #00ff88 0px, #00ff88 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, #00ff88 0px, #00ff88 1px, transparent 1px, transparent 40px)
          `,
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-[#00ff88] text-sm tracking-widest mb-4">МОНЕТИЗАЦИЯ</p>
        <h2 className="text-3xl md:text-5xl text-white mb-6">
          Способы заработка после курса
        </h2>
        <p className="text-xl text-[#888] mb-4 max-w-2xl">
          Не просто навыки — конкретные сценарии дохода
        </p>
        <p className="text-[#ffd700] text-2xl font-bold mb-16">
          Потенциал: от 500,000₽ до 3,000,000₽ в год
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {moneyMakingWays.map((way) => (
            <div 
              key={way.id}
              className="bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#333] transition-all group"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 flex items-center justify-center border-2 rounded-lg group-hover:scale-110 transition-transform"
                  style={{ borderColor: way.color, color: way.color }}
                >
                  {way.icon}
                </div>
                <h3 className="text-white text-2xl font-bold">{way.title}</h3>
              </div>
              
              {/* Examples */}
              <div className="mb-6">
                <p className="text-[#666] text-sm mb-3">Что делаешь:</p>
                <ul className="space-y-2">
                  {way.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span style={{ color: way.color }}>▸</span>
                      <span className="text-[#ccc] text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Potential */}
              <div className="bg-[#111] p-4 mb-4 border-l-2" style={{ borderColor: way.color }}>
                <p className="text-[#666] text-xs mb-1">Потенциал дохода:</p>
                <p className="text-white text-lg font-bold">{way.potential}</p>
              </div>
              
              {/* Reality check */}
              <div className="bg-[#001a0d] border border-[#00ff88]/20 p-4">
                <p className="text-[#00ff88] text-xs mb-1">💡 Реальный кейс:</p>
                <p className="text-[#888] text-sm">{way.reality}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Total Potential */}
        <div className="bg-gradient-to-r from-[#001a0d] to-[#1a1a00] border-2 border-[#00ff88] p-8 text-center">
          <p className="text-[#666] text-sm mb-2">Суммарный потенциал через 12 месяцев:</p>
          <p className="text-[#00ff88] text-5xl font-bold mb-4">
            от 500,000₽ до 3,000,000₽
          </p>
          <p className="text-white text-lg mb-4">
            Окупаемость курса: <span className="text-[#ffd700]">первый проект</span>
          </p>
          <div className="flex items-center justify-center gap-8 text-[#888]">
            <div>
              <p className="text-2xl text-white font-bold">45,000₽</p>
              <p className="text-sm">вложение</p>
            </div>
            <div className="text-[#00ff88] text-3xl">→</div>
            <div>
              <p className="text-2xl text-[#00ff88] font-bold">500,000₽+</p>
              <p className="text-sm">возврат за год</p>
            </div>
          </div>
          <p className="text-[#ffd700] text-xl mt-6">
            ROI: <span className="font-bold">1,000%+</span>
          </p>
        </div>
      </div>
    </section>
  )
}
