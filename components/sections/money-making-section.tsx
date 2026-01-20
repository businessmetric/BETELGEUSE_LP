"use client"

import { Briefcase, TrendingUp, Zap, Target, Rocket } from "lucide-react"

const moneyMakingWays = [
  {
    id: 1,
    icon: <Briefcase className="w-8 h-8" />,
    title: "Проекты на заказ",
    examples: [
      "Сайты и лендинги",
      "SaaS решения",
      "Интеграции систем",
      "Telegram боты",
    ],
    potential: "от 15,000₽ до 500,000₽",
    reality: "Запустил 3 проекта за месяц — заработал 120,000₽",
    color: "#00ff88",
  },
  {
    id: 2,
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Рост стоимости на рынке",
    examples: [
      "Новые востребованные навыки",
      "Повышение ценности как специалиста",
      "Умение создавать цифровые продукты",
      "Независимость от программистов",
    ],
    potential: "+30% к текущей ЗП",
    reality: "Маркетолог с 80,000₽ → 104,000₽ после курса (+24,000₽/мес = +288,000₽/год)",
    color: "#ffd700",
  },
  {
    id: 3,
    icon: <Zap className="w-8 h-8" />,
    title: "Ускорение через автоматизации",
    examples: [
      "Автоматизация рутинных задач",
      "Скрипты для работы",
      "Боты-помощники",
      "Инструменты для эффективности",
    ],
    potential: "Освобождаешь 2 часа в день",
    reality: "2 часа × 22 дня = 44 часа/месяц свободного времени для новых проектов",
    color: "#00d4ff",
  },
  {
    id: 4,
    icon: <Target className="w-8 h-8" />,
    title: "Новые точки роста",
    examples: [
      "Собственная аналитика",
      "Инструменты для работы",
      "Автоматизация процессов",
      "Улучшение продуктивности",
    ],
    potential: "Выше эффективность работы",
    reality: "Создал аналитику для своих проектов — увеличил конверсию на 40%",
    color: "#a855f7",
  },
  {
    id: 5,
    icon: <Rocket className="w-8 h-8" />,
    title: "Свой SaaS или IT решение",
    examples: [
      "Создание продукта",
      "Монетизация сервиса",
      "Подписочная модель",
      "Масштабируемый доход",
    ],
    potential: "Зависит от продукта",
    reality: "Запустил SaaS за 3 месяца → 8 клиентов × 5,000₽ = 40,000₽/мес recurring",
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
          Твоя прибыль после вступления в Акселератор
        </h2>
        <p className="text-xl text-[#888] mb-16 max-w-2xl">
          Не просто навыки — конкретные сценарии дохода
        </p>
        
        <div className="mb-12 text-center bg-gradient-to-r from-[#00ff88]/10 to-[#ffd700]/10 border-2 border-[#00ff88] p-8">
          <p className="text-[#00ff88] text-sm tracking-widest mb-3">ПОТЕНЦИАЛ</p>
          <p className="text-white text-4xl md:text-5xl font-bold mb-2">
            от 500,000₽ до 3,000,000₽
          </p>
          <p className="text-[#888] text-lg">в год</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">{moneyMakingWays.slice(0, 3).map((way, index) => (
            <div 
              key={way.id}
              className="group bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#333] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)] hover:transform hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
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
        
        {/* Bottom 2 cards - full width */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {moneyMakingWays.slice(3, 5).map((way, index) => (
            <div 
              key={way.id}
              className="group bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#333] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)] hover:transform hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${(index + 3) * 100}ms`,
              }}
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
                  {way.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2">
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
