"use client"

export function ComparisonSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#ff4444] text-sm tracking-widest mb-4">СРАВНЕНИЕ</p>
        <h2 className="text-3xl md:text-5xl text-white mb-16">
          Путь С и БЕЗ BETELGEUSE
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Without Betelgeuse */}
          <div className="bg-[#0a0a0a] border-2 border-[#ff4444] p-8 hover:shadow-[0_0_30px_rgba(255,68,68,0.2)] transition-all duration-500 animate-in fade-in slide-in-from-left-4">
            <h3 className="text-[#ff4444] text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">❌</span>
              БЕЗ BETELGEUSE
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-2 border-[#ff4444] pl-4">
                <p className="text-white font-bold mb-2">Месяц 1-3: Поиск программиста</p>
                <p className="text-[#888] text-sm mb-2">Ищешь на фрилансе, собеседуешь, торгуешься</p>
                <p className="text-[#ff4444] font-bold">Затраты: 90,000₽ - 180,000₽</p>
              </div>
              
              <div className="border-l-2 border-[#ff4444] pl-4">
                <p className="text-white font-bold mb-2">Месяц 4-6: Разработка</p>
                <p className="text-[#888] text-sm mb-2">Ждёшь, не понимаешь что происходит, платишь</p>
                <p className="text-[#ff4444] font-bold">Затраты: 180,000₽ - 360,000₽</p>
              </div>
              
              <div className="border-l-2 border-[#ff4444] pl-4">
                <p className="text-white font-bold mb-2">Месяц 7-9: Правки и баги</p>
                <p className="text-[#888] text-sm mb-2">"Это не входило в ТЗ", "Надо доплатить"</p>
                <p className="text-[#ff4444] font-bold">Затраты: 90,000₽ - 150,000₽</p>
              </div>
              
              <div className="bg-[#ff4444]/10 p-4 border border-[#ff4444]">
                <p className="text-white text-sm mb-1">ИТОГО через 9 месяцев:</p>
                <p className="text-[#ff4444] text-3xl font-bold">360,000₽ - 690,000₽</p>
                <ul className="text-[#888] text-sm mt-3 space-y-1">
                  <li>+ Стресс и зависимость</li>
                  <li>+ Непонимание технологий</li>
                  <li>+ Невозможность править самому</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* With Betelgeuse */}
          <div className="bg-[#0a0a0a] border-2 border-[#00ff88] p-8 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all duration-500 animate-in fade-in slide-in-from-right-4" style={{ animationDelay: "150ms" }}>
            <h3 className="text-[#00ff88] text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">✅</span>
              С BETELGEUSE
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-2 border-[#00ff88] pl-4">
                <p className="text-white font-bold mb-2">Месяц 1: Старт + обучение</p>
                <p className="text-[#888] text-sm mb-2">Основы, первый прототип, идея проекта</p>
                <p className="text-[#00ff88] font-bold">Прогресс: 20% проекта</p>
              </div>
              
              <div className="border-l-2 border-[#00ff88] pl-4">
                <p className="text-white font-bold mb-2">Месяц 2-3: Разработка MVP</p>
                <p className="text-[#888] text-sm mb-2">Создаёшь сам, понимаешь каждую строку кода</p>
                <p className="text-[#00ff88] font-bold">Прогресс: 60% проекта</p>
              </div>
              
              <div className="border-l-2 border-[#00ff88] pl-4">
                <p className="text-white font-bold mb-2">Месяц 4-6: Запуск + доход</p>
                <p className="text-[#888] text-sm mb-2">Бета-тестеры, первые клиенты, монетизация</p>
                <p className="text-[#00ff88] font-bold">Прогресс: 100% + доход</p>
              </div>
              
              <div className="bg-[#00ff88]/10 p-4 border border-[#00ff88]">
                <p className="text-white text-sm mb-1">ИТОГО через 6 месяцев:</p>
                <p className="text-[#00ff88] text-3xl font-bold">45,000₽</p>
                <ul className="text-[#ccc] text-sm mt-3 space-y-1">
                  <li>+ Полная независимость</li>
                  <li>+ Понимание всех технологий</li>
                  <li>+ Навыки на всю жизнь</li>
                  <li>+ Рабочий проект в портфолио</li>
                  <li>+ Потенциал дохода</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom comparison */}
        <div className="mt-12 bg-[#0a0a0a] border border-[#ffd700] p-8 text-center">
          <p className="text-[#ffd700] text-xl font-bold mb-4">
            💡 Экономия: от 315,000₽ до 645,000₽
          </p>
          <p className="text-white text-lg">
            Вместо 9 месяцев зависимости → 6 месяцев независимости
          </p>
        </div>
      </div>
    </section>
  )
}
