"use client"

import { useEffect, useState } from "react"

export function ProgressBar() {
  const [progress, setProgress] = useState(0)
  const total = 50
  const filled = 18
  const percentage = (filled / total) * 100

  useEffect(() => {
    // Animate progress bar on mount
    const timer = setTimeout(() => {
      setProgress(percentage)
    }, 300)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[#00ff88] text-sm font-medium">Набор в группу:</p>
        <p className="text-white text-sm font-bold">
          {filled}/{total} мест занято
        </p>
      </div>
      
      <div className="relative h-8 bg-[#0a0a0a] border border-[#333] overflow-hidden">
        {/* Animated fill */}
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 flex">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className="flex-1 border-r border-[#222] last:border-r-0"
            />
          ))}
        </div>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-xs font-bold drop-shadow-lg">
            {Math.round(progress)}% заполнено
          </span>
        </div>
      </div>
      
      <p className="text-[#ff4444] text-xs mt-2 text-center animate-pulse">
        ⚠️ Осталось {total - filled} мест • Следующий набор: сентябрь 2026
      </p>
    </div>
  )
}
