"use client"

import Image from "next/image"
import { AnimatedCounter } from "@/components/animated-counter"

export function AboutSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#00ff88] text-sm tracking-widest mb-4">КТО ВЕДЁТ</p>
        <h2 className="text-3xl md:text-4xl text-white mb-12">Senior Marketing Analyst & IT-предприниматель</h2>
        
        {/* Photo */}
        <div className="mb-12 flex justify-center animate-in fade-in slide-in-from-bottom-4">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#00ff88] hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(0,255,136,0.3)]">
            <Image
              src="/images/profile.jpg"
              alt="Александр Горбатов"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          </div>
        </div>
        
        {/* Name and Age */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: "150ms" }}>
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
            Александр Горбатов
          </h3>
          <p className="text-[#888] text-xl mb-6">35 лет</p>
        </div>
        
        {/* Wow Facts */}
        <div className="flex flex-wrap gap-6 mb-12 justify-center animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: "300ms" }}>
          <div className="flex items-center gap-2">
            <span className="text-[#00ff88] text-2xl">✓</span>
            <span className="text-white">Запустил <AnimatedCounter end={3} className="text-[#00ff88] font-bold" /> SaaS, которые зарабатывают</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ffd700] text-2xl">✓</span>
            <span className="text-white">Консультировал McDonald's и ЛАНИТ</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#00d4ff] text-2xl">✓</span>
            <span className="text-white"><AnimatedCounter end={8} className="text-[#00d4ff] font-bold" /> лет в маркетинге</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ff4444] text-2xl">✓</span>
            <span className="text-white"><AnimatedCounter end={2} className="text-[#ff4444] font-bold" /> года преподаю в Нетологии</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Experience */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#ffd700] text-lg mb-4">Консультирую</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#00ff88]" />
                  <span className="text-white">ЛАНИТ</span>
                  <span className="text-[#666] text-sm">корпоративная IT</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#00ff88]" />
                  <span className="text-white">McDonald's</span>
                  <span className="text-[#666] text-sm">глобальная сеть</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#00ff88]" />
                  <span className="text-white">FunSun / ex-TUI</span>
                  <span className="text-[#666] text-sm">туризм</span>
                </div>
                <p className="text-[#00d4ff] text-sm pl-6">+ клиенты в Европе и Азии</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-[#ffd700] text-lg mb-4">Опыт</h3>
              <ul className="space-y-2 text-[#ccc]">
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff88] mt-1">8 лет</span>
                  <span>запускал Ed-проекты (Roistat Academy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff88] mt-1">CEO</span>
                  <span>компании Бизнес-Метрика</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff88] mt-1">CEO</span>
                  <span>SaaS сервиса Veeneo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff88] mt-1">2 года</span>
                  <span>преподаю в Нетологии</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right - Key message */}
          <div className="bg-[#0a0a0a] border border-[#333] p-8 flex flex-col justify-center">
            <p className="text-2xl text-white mb-6 leading-relaxed">
              Я не говорю теорию — я создаю реально работающие сервисы.
            </p>
            <p className="text-[#00ff88] text-xl">
              И знаю, как ты можешь это делать тоже.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
