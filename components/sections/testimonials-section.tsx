"use client"

import Image from "next/image"
import { AnimatedCounter } from "@/components/animated-counter"

const testimonials = [
  {
    id: 1,
    name: "Александр Горбатов",
    age: 35,
    role: "Маркетолог, ex-Сбер",
    photo: "/images/profile.jpg",
    quote: "За 4 месяца запустил свой CRM для агентств. Первые 3 клиента уже платят. Ира не просто учит — она показывает как делать бизнес.",
    result: "Первые 45,000₽ дохода на 5-й месяц",
    color: "#00ff88",
  },
  {
    id: 2,
    name: "Мария Ковалёва",
    age: 29,
    role: "Маркетинг-директор в e-commerce",
    photo: "/images/profile.jpg",
    quote: "Я боялась кода. Теперь у меня работает сервис аналитики для Instagram. Командный проект тоже запустили — калькулятор юнит-экономики.",
    result: "2 рабочих проекта + освобождение от программистов",
    color: "#ffd700",
  },
  {
    id: 3,
    name: "Дмитрий Соколов",
    age: 32,
    role: "Фрилансер в маркетинге",
    photo: "/images/profile.jpg",
    quote: "До BETELGEUSE я 2 года откладывал запуск своего проекта. «Найму программиста потом». Потом никогда не наступало. Сейчас у меня MVP на продакшене.",
    result: "Запустил сервис за 3 месяца самостоятельно",
    color: "#00d4ff",
  },
]

const chatScreenshots = [
  {
    author: "Иван П.",
    message: "Кто-нибудь знает как правильно настроить CORS в Next.js?",
    reply: "Ира Б.",
    replyText: "Вот гайд который я использую... [ссылка]",
    time: "13:24",
  },
  {
    author: "Катя Л.",
    message: "Я запустила! Первый пользователь зарегистрировался! 🎉",
    likes: "12 ❤️",
    time: "Вчера в 18:42",
  },
  {
    author: "Максим Р.",
    message: "Спасибо за code review! Исправил все замечания, теперь работает идеально",
    reply: "Ира Б.",
    replyText: "Отлично! Теперь можно деплоить на прод 🚀",
    time: "2 дня назад",
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#00ff88] text-sm tracking-widest mb-4">СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО</p>
        <h2 className="text-3xl md:text-4xl text-white mb-6">Они уже создают свои проекты</h2>
        <p className="text-[#888] text-lg mb-16 max-w-2xl">
          Это реальные участники первой бета-когорты. Их результаты за 3-5 месяцев.
        </p>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="group bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] transition-all duration-500 hover:transform hover:scale-[1.02] cursor-pointer animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Photo */}
              <div className="mb-6 flex justify-center">
                <div 
                  className="relative w-32 h-32 rounded-full overflow-hidden border-4 group-hover:scale-110 transition-transform duration-500"
                  style={{ borderColor: testimonial.color }}
                >
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                </div>
              </div>
              
              {/* Name and Age */}
              <div className="text-center mb-4">
                <h3 className="text-white text-xl font-bold mb-1 group-hover:text-[#00ff88] transition-colors duration-300">
                  {testimonial.name}
                </h3>
                <p className="text-[#888] text-sm mb-2">{testimonial.age} лет</p>
                <p className="text-[#666] text-xs">{testimonial.role}</p>
              </div>
              
              {/* Quote */}
              <blockquote 
                className="border-l-2 pl-4 mb-6 text-[#ccc] text-sm leading-relaxed group-hover:text-white transition-colors duration-300"
                style={{ borderColor: testimonial.color }}
              >
                "{testimonial.quote}"
              </blockquote>
              
              {/* Result */}
              <div 
                className="bg-[#111] p-4 border-l-2 group-hover:bg-[#1a1a1a] transition-colors duration-300" 
                style={{ borderColor: testimonial.color }}
              >
                <p className="text-[#888] text-xs mb-1">Результат:</p>
                <p className="text-white text-sm font-medium" style={{ color: testimonial.color }}>
                  {testimonial.result}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Chat Screenshots Section */}
        <div className="bg-[#0a0a0a] border border-[#333] p-8">
          <h3 className="text-white text-2xl mb-4">Внутри чата — живое комьюнити</h3>
          <p className="text-[#888] mb-8">Вопросы решаются за минуты, не дни. Ты не один.</p>
          
          <div className="space-y-4">
            {chatScreenshots.map((chat, index) => (
              <div key={index} className="bg-[#111] p-4 border-l-2 border-[#00ff88]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00ff88] text-black flex items-center justify-center text-xs font-bold">
                    {chat.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm mb-1">
                      <span className="font-medium">{chat.author}</span>
                      <span className="text-[#666] text-xs ml-2">{chat.time}</span>
                    </p>
                    <p className="text-[#ccc] text-sm mb-2">{chat.message}</p>
                    
                    {chat.reply && (
                      <div className="ml-4 pl-3 border-l-2 border-[#ffd700] mt-2">
                        <p className="text-[#ffd700] text-xs mb-1">{chat.reply}</p>
                        <p className="text-[#aaa] text-sm">{chat.replyText}</p>
                      </div>
                    )}
                    
                    {chat.likes && (
                      <p className="text-[#666] text-xs mt-2">{chat.likes}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-[#00ff88] text-sm">
              💬 Средний ответ на вопрос: 12 минут
            </p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-[#00ff88] text-3xl font-bold mb-2">
              <AnimatedCounter end={15} />
            </p>
            <p className="text-[#666] text-sm">участников в бете</p>
          </div>
          <div className="text-center">
            <p className="text-[#ffd700] text-3xl font-bold mb-2">
              <AnimatedCounter end={23} />
            </p>
            <p className="text-[#666] text-sm">запущенных проектов</p>
          </div>
          <div className="text-center">
            <p className="text-[#00d4ff] text-3xl font-bold mb-2">
              <AnimatedCounter end={32} />
            </p>
            <p className="text-[#666] text-sm">осталось мест</p>
          </div>
        </div>
      </div>
    </section>
  )
}
