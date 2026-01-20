"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="cta-section" className="px-4 md:px-8 lg:px-16 py-24 bg-[#050505] relative overflow-hidden">
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
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl text-white mb-6 text-balance">
          Готов запустить свой IT-сервис?
        </h2>
        
        <p className="text-xl text-[#888] mb-12 max-w-xl mx-auto">
          Мы отбираем людей, готовых реально работать. Не каждый подходит для BETELGEUSE.
        </p>
        
        {/* Key info */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-lg mx-auto">
          <div>
            <p className="text-[#00ff88] text-2xl font-bold">1 фев</p>
            <p className="text-[#666] text-sm">старт</p>
          </div>
          <div>
            <p className="text-[#ffd700] text-2xl font-bold">20</p>
            <p className="text-[#666] text-sm">мест</p>
          </div>
          <div>
            <p className="text-[#00d4ff] text-2xl font-bold">15 мин</p>
            <p className="text-[#666] text-sm">интервью</p>
          </div>
        </div>
        
        <Button 
          size="lg"
          className="bg-[#00ff88] text-black hover:bg-[#00cc6a] text-xl px-12 py-8 h-auto font-bold mb-8"
        >
          Записаться на интервью
        </Button>
        
        <p className="text-[#666] mb-12">
          15 минут разговора. Ты расскажешь о себе. Я скажу, подходит это тебе или нет.
        </p>
        
        <div className="pt-10 max-w-xl mx-auto">
          <h3 className="text-white text-lg mb-4">Интервью — это не испытание</h3>
          <p className="text-[#888]">
            Я проверяю: готов ли ты вкладываться в 3 месяца.
            <br />
            Ты проверяешь: стоит ли это делать на самом деле.
          </p>
          <p className="text-[#888] mt-4">
            <span className="text-white">Если нет — я скажу честно.</span>
            <br />
            <span className="text-[#00ff88]">Если да — мы начинаем 1 февраля.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
