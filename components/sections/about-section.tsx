"use client"

import Image from "next/image"
import { AnimatedCounter } from "@/components/animated-counter"

export function AboutSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#00ff88] text-sm tracking-widest mb-4">КТО ВЕДЁТ</p>
        <h2 className="text-3xl md:text-4xl text-white mb-12">Senior Marketing Analyst & IT-предприниматель</h2>
        
        {/* Main Layout: Photo Left, Info Right */}
        <div className="grid md:grid-cols-[300px_1fr] gap-12 mb-16">
          {/* Left - Photo */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#00ff88] hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(0,255,136,0.3)]">
              <Image
                src="/images/profile.jpg"
                alt="Александр Горбатов"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Right - Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
              Александр Горбатов
            </h3>
            <p className="text-[#888] text-xl mb-8">35 лет</p>
            
            <div className="space-y-6">
              {/* ФИО, должность уже выше */}
              
              {/* Опыт - структурный */}
              <div>
                <h4 className="text-[#ffd700] text-lg mb-4">Опыт</h4>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <span className="text-[#00ff88] font-bold text-lg min-w-[80px]">8 лет</span>
                    <span className="text-white">запускал Ed-проекты (Roistat Academy)</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#00ff88] font-bold text-lg min-w-[80px]">CEO</span>
                    <span className="text-white">компании Бизнес-Метрика</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#00ff88] font-bold text-lg min-w-[80px]">CEO</span>
                    <span className="text-white">SaaS сервиса Veeneo</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#00ff88] font-bold text-lg min-w-[80px]">2 года</span>
                    <span className="text-white">преподаю в Нетологии</span>
                  </div>
                </div>
              </div>
              
              {/* Ссылка на Facebook */}
              <div>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-white transition-colors border border-[#00d4ff] hover:border-white px-4 py-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Мой Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Консультирую - с логотипами */}
        <div className="mb-16">
          <h3 className="text-[#ffd700] text-2xl mb-8 text-center">Консультирую</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0a] border border-[#333] p-6 text-center hover:border-[#00ff88] transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]">
              <div className="bg-white/5 w-24 h-24 mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white">
                1С
              </div>
              <h4 className="text-white text-xl font-bold mb-2">1С</h4>
              <p className="text-[#666] text-sm">корпоративные системы</p>
            </div>
            
            <div className="bg-[#0a0a0a] border border-[#333] p-6 text-center hover:border-[#ffd700] transition-all hover:shadow-[0_0_20px_rgba(255,215,0,0.1)]">
              <div className="bg-white/5 w-24 h-24 mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-[#ffd700]">
                M
              </div>
              <h4 className="text-white text-xl font-bold mb-2">McDonald's</h4>
              <p className="text-[#666] text-sm">глобальная сеть</p>
            </div>
            
            <div className="bg-[#0a0a0a] border border-[#333] p-6 text-center hover:border-[#00d4ff] transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
              <div className="bg-white/5 w-24 h-24 mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-[#00d4ff]">
                F
              </div>
              <h4 className="text-white text-xl font-bold mb-2">FunSun / ex-TUI</h4>
              <p className="text-[#666] text-sm">туризм</p>
            </div>
          </div>
          <p className="text-[#00d4ff] text-center mt-6">+ клиенты в Европе и Азии</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Wow Facts */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[#00ff88] text-3xl">✓</span>
              <span className="text-white text-lg">Запустил <AnimatedCounter end={3} className="text-[#00ff88] font-bold" /> SaaS, которые зарабатывают</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#ffd700] text-3xl">✓</span>
              <span className="text-white text-lg">Консультировал McDonald's и 1С</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#00d4ff] text-3xl">✓</span>
              <span className="text-white text-lg"><AnimatedCounter end={8} className="text-[#00d4ff] font-bold" /> лет в маркетинге</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#ff4444] text-3xl">✓</span>
              <span className="text-white text-lg"><AnimatedCounter end={2} className="text-[#ff4444] font-bold" /> года преподаю в Нетологии</span>
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
