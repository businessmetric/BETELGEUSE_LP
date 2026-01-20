"use client"

import Image from "next/image"
import { AnimatedCounter } from "@/components/animated-counter"

export function AboutSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#00ff88] text-sm tracking-widest mb-4">КТО ВЕДЁТ</p>
        <h2 className="text-3xl md:text-4xl text-white mb-6">Senior Marketing Analyst & IT-предприниматель</h2>
        
        {/* Wow Facts */}
        <div className="flex flex-wrap gap-6 mb-12">
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
        
        {/* Photo */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-[#00ff88]">
            <Image
              src="/images/profile.jpg"
              alt="Ира"
              fill
              className="object-cover"
              priority
            />
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
