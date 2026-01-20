"use client"

const timeline = [
  {
    months: "1-2",
    title: "Выбор идеи + Настройка",
    icon: "💡",
    tasks: [
      "Мозговой штурм, выбор идеи, исследование рынка",
      "Настройка окружения, первые воркшопы, первый код",
    ],
    color: "#00ff88",
  },
  {
    months: "3",
    title: "Создание прототипа",
    icon: "🛠️",
    tasks: [
      "Разработка MVP, code review, итерации",
      "Тестирование, feedback, подготовка к запуску",
    ],
    color: "#ffd700",
  },
  {
    months: "4-5",
    title: "Запуск + Масштабирование",
    icon: "🚀",
    tasks: [
      "Публикация, первые пользователи, сбор feedback",
      "Улучшения, новые фичи, первые результаты",
    ],
    color: "#00d4ff",
  },
  {
    months: "6",
    title: "Оптимизация + Независимость",
    icon: "🎯",
    tasks: [
      "Полировка, масштабирование",
      "Подготовка к самостоятельной работе",
    ],
    color: "#ff6b6b",
  },
]

export function TimelineSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-24 bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#00ff88] text-sm tracking-widest mb-4">ПРОГРАММА</p>
        <h2 className="text-3xl md:text-4xl text-white mb-16">3 месяца шаг за шагом</h2>
        
        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-[#333]" />
          
          <div className="space-y-12">
            {timeline.map((phase, index) => (
              <div 
                key={phase.months}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div 
                    className={`bg-[#0a0a0a] border border-[#333] p-6 inline-block ${
                      index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                    }`}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className="text-3xl">{phase.icon}</span>
                      <div>
                        <span 
                          className="text-xs px-2 py-1 font-medium"
                          style={{ backgroundColor: phase.color, color: '#000' }}
                        >
                          МЕСЯЦ {phase.months}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl text-white mb-4">{phase.title}</h3>
                    
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {phase.tasks.map((task) => (
                        <li key={task} className="text-[#888] text-sm">
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Dot - desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 items-center justify-center">
                  <div 
                    className="w-4 h-4 border-2 bg-[#050505]"
                    style={{ borderColor: phase.color }}
                  />
                </div>
                
                {/* Empty space for other side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Parallel tasks */}
        <div className="mt-16 border border-[#00ff88] bg-[#0a0a0a] p-8">
          <h3 className="text-white text-xl mb-6">Параллельно все 3 месяца:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <span className="text-[#00ff88] text-2xl">👥</span>
              <div>
                <p className="text-white mb-1">Командный проект</p>
                <p className="text-[#888] text-sm">С 3-4 другими маркетологами</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#00ff88] text-2xl">📹</span>
              <div>
                <p className="text-white mb-1">Встречи 3 раза в неделю</p>
                <p className="text-[#888] text-sm">По 1 часу каждая</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#00ff88] text-2xl">💬</span>
              <div>
                <p className="text-white mb-1">Работа в чате</p>
                <p className="text-[#888] text-sm">Вопросы, помощь, разборы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
