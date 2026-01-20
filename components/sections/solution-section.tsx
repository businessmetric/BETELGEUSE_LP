"use client"

import { MiniCTA } from "@/components/mini-cta"

export function SolutionSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#00ff88] text-sm tracking-widest mb-4">РЕШЕНИЕ</p>
        <h2 className="text-3xl md:text-4xl text-[#ffd700] mb-4">
          BETELGEUSE Digital Genesis Lab
        </h2>
        <p className="text-xl text-[#888] mb-16">
          Цифровой акселератор для маркетологов. Не курс — рабочее пространство.
        </p>
        
        {/* Three main cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-[#0a0a0a] border border-[#333] p-6">
            <div className="w-12 h-12 bg-[#00ff88] text-black flex items-center justify-center text-2xl font-bold mb-6">
              2
            </div>
            <h3 className="text-white text-xl mb-4">Рабочих IT-сервиса</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-[#00ff88] mb-1">Свой проект</p>
                <p className="text-[#888]">Выбираешь идею, запускаешь, монетизируешь. Первый доход — месяц 4-5.</p>
              </div>
              <div>
                <p className="text-[#ffd700] mb-1">Командный проект</p>
                <p className="text-[#888]">С 3-4 маркетологами. Учишься работать в команде.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0a0a0a] border border-[#333] p-6">
            <div className="w-12 h-12 bg-[#ffd700] text-black flex items-center justify-center text-2xl font-bold mb-6">
              3x
            </div>
            <h3 className="text-white text-xl mb-4">Встречи в неделю</h3>
            <div className="space-y-3 text-sm text-[#888]">
              <p>По 1 часу — воркшопы, разбор ошибок, совместная разработка.</p>
              <p>Параллельно — работа в чате: помощь 24/7, code review, обмен опытом.</p>
              <p className="text-[#00ff88]">Гибкий график — работай когда удобно.</p>
            </div>
          </div>
          
          <div className="bg-[#0a0a0a] border border-[#333] p-6">
            <div className="w-12 h-12 bg-[#00d4ff] text-black flex items-center justify-center text-2xl font-bold mb-6">
              20
            </div>
            <h3 className="text-white text-xl mb-4">Маркетологов в когорте</h3>
            <div className="space-y-3 text-sm text-[#888]">
              <p>Вместе 6 месяцев (с 1 февраля).</p>
              <p>Git + совместная разработка.</p>
              <p>Реальные люди, реальные проблемы.</p>
              <p className="text-[#00ff88]">Тебя не оставят одного.</p>
            </div>
          </div>
        </div>
        
        {/* Why it works */}
        <div className="mb-20">
          <h3 className="text-2xl text-white mb-10">Почему это работает</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-2 border-[#00ff88] pl-6">
              <h4 className="text-[#00ff88] text-lg mb-3">Не абстрактное обучение</h4>
              <p className="text-[#ccc] mb-3">
                Ты не смотришь 100 часов видео. Ты делаешь с первого дня: выбираешь идею, создаёшь, запускаешь, получаешь первых пользователей.
              </p>
              <p className="text-white font-medium">
                Это не портфолио. Это настоящий бизнес.
              </p>
            </div>
            
            <div className="border-l-2 border-[#ffd700] pl-6">
              <h4 className="text-[#ffd700] text-lg mb-3">Ты не одинец в техе</h4>
              <p className="text-[#ccc] mb-3">
                Рядом 19 маркетологов с таким же страхом. Вместе разбираетесь не в вакууме, а в цифровом пространстве.
              </p>
              <p className="text-white font-medium">
                Быстрее, чем Google + Reddit + ChatGPT.
              </p>
            </div>
            
            <div className="border-l-2 border-[#00d4ff] pl-6">
              <h4 className="text-[#00d4ff] text-lg mb-3">От маркетолога к founder</h4>
              <p className="text-[#ccc] mb-3">
                За 6 месяцев получишь 2 работающих сервиса, умение создавать такие сервисы повторно, независимость от программистов.
              </p>
              <p className="text-white font-medium">
                Новая позиция: tech-founder.
              </p>
            </div>
          </div>
        </div>
        
        {/* This is NOT / This IS */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[#ff4444] bg-[#0a0a0a] p-8">
            <h4 className="text-[#ff4444] text-xl mb-6">Это НЕ:</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#888]">
                <span className="text-[#ff4444] text-xl">×</span>
                Онлайн-курс
              </li>
              <li className="flex items-center gap-3 text-[#888]">
                <span className="text-[#ff4444] text-xl">×</span>
                Видео-лекции
              </li>
              <li className="flex items-center gap-3 text-[#888]">
                <span className="text-[#ff4444] text-xl">×</span>
                Портфолио-проекты
              </li>
              <li className="flex items-center gap-3 text-[#888]">
                <span className="text-[#ff4444] text-xl">×</span>
                Сертификат
              </li>
            </ul>
          </div>
          
          <div className="border border-[#00ff88] bg-[#0a0a0a] p-8">
            <h4 className="text-[#00ff88] text-xl mb-6">Это:</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white">
                <span className="text-[#00ff88] text-xl">+</span>
                Цифровое рабочее пространство
              </li>
              <li className="flex items-center gap-3 text-white">
                <span className="text-[#00ff88] text-xl">+</span>
                Реальные проекты (не домашки)
              </li>
              <li className="flex items-center gap-3 text-white">
                <span className="text-[#00ff88] text-xl">+</span>
                Реальные навыки (не теория)
              </li>
              <li className="flex items-center gap-3 text-white">
                <span className="text-[#00ff88] text-xl">+</span>
                Независимость от программистов
              </li>
              <li className="flex items-center gap-3 text-white">
                <span className="text-[#00ff88] text-xl">+</span>
                Система поддержки
              </li>
            </ul>
          </div>
        </div>
        
        <MiniCTA />
      </div>
    </section>
  )
}
