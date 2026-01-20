"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-[#333] backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="hidden md:block">
          <p className="text-white text-sm font-medium">Старт 1 февраля • Осталось 32 места из 50</p>
          <p className="text-[#666] text-xs">Создай свой IT-сервис за 3 месяца</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="hidden sm:block text-right">
            <p className="text-[#00ff88] text-lg font-bold">45 000 ₽</p>
            <p className="text-[#666] text-xs">за 3 месяца</p>
          </div>
          <Button 
            size="lg"
            className="bg-[#00ff88] text-black hover:bg-[#00cc6a] font-bold w-full md:w-auto"
            onClick={() => {
              // Scroll to form or open modal
              document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Записаться на интервью
          </Button>
        </div>
      </div>
    </div>
  )
}
