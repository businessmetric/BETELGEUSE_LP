"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative max-w-2xl mx-4 bg-[#0a0a0a] border-2 border-[#00ff88] p-8 md:p-12 animate-in slide-in-from-bottom-4 duration-500">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-[#666] hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="text-6xl mb-6">🛑</div>
          <h2 className="text-3xl md:text-4xl text-white mb-4 font-bold">
            Подожди!
          </h2>
          <p className="text-xl text-[#888] mb-8">
            Забери бесплатно перед уходом:
          </p>
          
          <div className="bg-gradient-to-r from-[#001a0d] to-[#1a1a00] border border-[#00ff88] p-6 mb-8">
            <p className="text-[#00ff88] text-2xl font-bold mb-2">
              📋 Чек-лист:
            </p>
            <p className="text-white text-xl mb-4">
              "7 прибыльных идей для первого IT-проекта"
            </p>
            <ul className="text-[#888] text-sm text-left space-y-2 max-w-md mx-auto">
              <li>✓ Ниши с низкой конкуренцией</li>
              <li>✓ Реальные примеры успешных проектов</li>
              <li>✓ Оценка сложности и срока создания</li>
              <li>✓ Способы монетизации каждой идеи</li>
            </ul>
          </div>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Твой email"
              className="w-full bg-[#1a1a1a] border border-[#333] text-white px-4 py-3 focus:border-[#00ff88] focus:outline-none transition-colors"
            />
            <Button
              size="lg"
              className="w-full bg-[#00ff88] text-black hover:bg-[#00cc6a] text-lg py-6 font-bold"
            >
              Скачать чек-лист бесплатно
            </Button>
          </div>

          <p className="text-[#666] text-xs mt-6">
            Никакого спама. Только полезный контент о создании IT-проектов.
          </p>
        </div>
      </div>
    </div>
  )
}
