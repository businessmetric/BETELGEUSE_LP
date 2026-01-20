"use client"

import { Button } from "@/components/ui/button"
import { Typewriter } from "@/components/typewriter"
import { ProgressBar } from "@/components/progress-bar"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 py-12 relative">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#00ff88 1px, transparent 1px),
            linear-gradient(90deg, #00ff88 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-6 mb-16">
          <div>
            <h2 className="text-[#ffd700] text-2xl md:text-3xl font-bold tracking-wide">BETELGEUSE</h2>
            <p className="text-[#666] text-sm tracking-widest">DIGITAL GENESIS LAB</p>
          </div>
        </div>
        
        {/* Main heading */}
        <div className="mb-10">
          <p className="text-[#ffd700] text-sm md:text-base tracking-wide mb-4 uppercase">
            Цифровой акселератор для маркетологов, которым нужен свой маркетинг-стартап здесь и сейчас
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 text-balance min-h-[120px] md:min-h-[180px]">
            <Typewriter 
              texts={[
                "Создай свой IT-сервис за 3 месяца",
                "С гарантией создания",
                "Без кучи теории",
                "Сразу в практику",
              ]}
              className="text-[#00ff88]"
            />
          </h1>
          <p className="text-xl md:text-2xl text-[#888] max-w-2xl">
            Без программистов. Без зависимости. Без теории.
          </p>
        </div>
        
        {/* CTA Block with Progress Bar First */}
        <div className="bg-[#0a0a0a] border border-[#333] p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <div className="flex-1">
              <p className="text-[#00ff88] text-lg mb-2">Старт 1 февраля 2026</p>
              <p className="text-[#888]">Интервью — 15 минут.</p>
            </div>
            <Button 
              size="lg"
              className="bg-[#00ff88] text-black hover:bg-[#00cc6a] text-lg px-8 py-6 h-auto font-bold whitespace-nowrap"
            >
              Записаться на интервью
            </Button>
          </div>
          <ProgressBar />
        </div>
        
        {/* Value propositions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="border-l-2 border-[#00ff88] pl-4 py-2">
            <p className="text-white text-lg mb-1">2 рабочих сервиса</p>
            <p className="text-[#666] text-sm">Свой проект + командный</p>
          </div>
          <div className="border-l-2 border-[#ffd700] pl-4 py-2">
            <p className="text-white text-lg mb-1">20 маркетологов</p>
            <p className="text-[#666] text-sm">В одной когорте с тобой</p>
          </div>
          <div className="border-l-2 border-[#00d4ff] pl-4 py-2">
            <p className="text-white text-lg mb-1">Гарантия возврата</p>
            <p className="text-[#666] text-sm">Если не научишься</p>
          </div>
        </div>
        
        {/* Projects showcase */}
        <div>
          <p className="text-[#666] text-sm mb-4">Мои проекты, созданные вайбкодингом:</p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://veeneo.ru" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#00d4ff] hover:text-white transition-colors border border-[#333] px-4 py-2 hover:border-[#00d4ff]"
            >
              Veeneo — SaaS аналитика
            </a>
            <a 
              href="https://utmmetki.ru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00d4ff] hover:text-white transition-colors border border-[#333] px-4 py-2 hover:border-[#00d4ff]"
            >
              UTM Метки — конструктор
            </a>
            <a 
              href="http://treker-zadachek.ru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00d4ff] hover:text-white transition-colors border border-[#333] px-4 py-2 hover:border-[#00d4ff]"
            >
              Task Tracker — задачи
            </a>
          </div>
          <a 
            href="https://t.me/business_metric" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-6 text-[#888] hover:text-[#00ff88] transition-colors text-sm"
          >
            @business_metric — мой блог про разработку без кода
          </a>
        </div>
      </div>
    </section>
  )
}
