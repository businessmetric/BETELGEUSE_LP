"use client"

import { Button } from "@/components/ui/button"

interface MiniCTAProps {
  variant?: "default" | "compact"
}

export function MiniCTA({ variant = "default" }: MiniCTAProps) {
  if (variant === "compact") {
    return (
      <div className="flex items-center justify-center gap-4 py-6">
        <div className="h-px bg-[#333] flex-1 max-w-[200px]" />
        <Button
          size="lg"
          className="bg-[#00ff88] text-black hover:bg-[#00cc6a] font-bold"
          onClick={() => {
            document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Записаться →
        </Button>
        <div className="h-px bg-[#333] flex-1 max-w-[200px]" />
      </div>
    )
  }

  return (
    <div className="my-16 bg-[#0a0a0a] border border-[#00ff88] p-8 text-center">
      <p className="text-[#00ff88] text-lg mb-3">Старт 1 февраля • Осталось 32 места</p>
      <p className="text-white text-xl mb-6">Готов создать свой IT-сервис?</p>
      <Button
        size="lg"
        className="bg-[#00ff88] text-black hover:bg-[#00cc6a] text-lg px-10 py-6 h-auto font-bold"
        onClick={() => {
          document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        Записаться на интервью
      </Button>
      <p className="text-[#666] text-sm mt-4">15 минут — и ты узнаешь подходишь ли ты</p>
    </div>
  )
}
