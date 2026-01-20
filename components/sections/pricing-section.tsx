"use client"

export function PricingSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#00ff88] text-sm tracking-widest mb-4">ИНВЕСТИЦИЯ</p>
        <h2 className="text-3xl md:text-4xl text-white mb-16">Сколько это стоит?</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Price Card */}
          <div className="bg-[#0a0a0a] border-2 border-[#00ff88] p-8">
            <div className="mb-8">
              <p className="text-[#00ff88] text-5xl font-bold mb-2">45 000 ₽</p>
              <p className="text-[#888] text-sm mb-1">за 3 месяца</p>
              <p className="text-[#666] text-xs">(1 февраля — конец апреля 2026, 3 месяца)</p>
            </div>
            
            <h3 className="text-white text-lg mb-6">Что входит:</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] text-lg">+</span>
                <span className="text-[#ccc]">Доступ к цифровому рабочему пространству</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] text-lg">+</span>
                <span className="text-[#ccc]">Встречи 3 раза в неделю по 1 часу</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] text-lg">+</span>
                <span className="text-[#ccc]">Поддержка в чате 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] text-lg">+</span>
                <span className="text-[#ccc]">Воркшопы по технологиям</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] text-lg">+</span>
                <span className="text-[#ccc]">Code review от опытных разработчиков</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] text-lg">+</span>
                <span className="text-[#ccc]">Помощь с деплоем и настройкой</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] text-lg">+</span>
                <span className="text-[#ccc]">Помощь с первыми продажами</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] text-lg">+</span>
                <span className="text-[#ccc]">Git репозиторий для совместной работы</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] text-lg">+</span>
                <span className="text-[#ccc]">Документация и шаблоны</span>
              </li>
            </ul>
            
            <div className="border-t border-[#333] pt-6">
              <p className="text-[#666] text-sm mb-3">Не входит (платишь сам):</p>
              <ul className="space-y-1 text-sm text-[#888]">
                <li>• Хостинг для сервиса (~$15/мес)</li>
                <li>• Домены (~$10/год)</li>
                <li>• API и сервисы (зависит от проекта)</li>
              </ul>
              <p className="text-[#ffd700] text-sm mt-3">Примерно $50/месяц в среднем</p>
            </div>
          </div>
          
          {/* Why this price */}
          <div className="space-y-8">
            <div className="bg-[#0a0a0a] border border-[#333] p-8">
              <h3 className="text-[#ffd700] text-lg mb-4">Почему эта цена?</h3>
              <p className="text-[#ccc] mb-4">
                Мы хотим быть доступнее. Умный маркетолог не должен быть богатым, чтобы запустить свой сервис.
              </p>
              <div className="bg-[#111] p-4 border-l-2 border-[#ffd700]">
                <p className="text-[#888] mb-2">45 000 ₽ = цена 1.5 месяца junior разработчика в Москве</p>
                <p className="text-white font-medium">
                  За 3 месяца сэкономишь ~450 000 ₽ на том, что не нанимаешь программиста.
                </p>
              </div>
            </div>
            
            <div className="bg-[#0a0a0a] border border-[#00ff88] p-8">
              <h3 className="text-[#00ff88] text-lg mb-6">Гарантия</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#ff4444] text-lg">×</span>
                  <span className="text-[#888]">Мы НЕ гарантируем доход</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00ff88] text-lg">✓</span>
                  <span className="text-white">Мы ГАРАНТИРУЕМ, что научишься собирать цифровые проекты</span>
                </div>
              </div>
              
              <div className="bg-[#001a0d] border border-[#00ff88] p-6">
                <p className="text-[#ccc] mb-3">
                  Если приходишь, добросовестно работаешь 3 месяца и при этом не создал ничего рабочего —
                </p>
                <p className="text-[#00ff88] text-xl font-bold">
                  ДЕНЬГИ НАЗАД. БЕЗ ВОПРОСОВ.
                </p>
              </div>
              
              <p className="text-[#666] text-sm mt-6">
                Доход зависит от тебя: выбор идеи, маркетинг (ты же маркетолог!), стойкость. Но навыки создавать сервисы — это гарантия.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
