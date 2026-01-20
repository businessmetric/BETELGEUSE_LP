"use client"

import React from "react"

import { cn } from "@/lib/utils"

interface TerminalBlockProps {
  title?: string
  children: React.ReactNode
  className?: string
  prompt?: string
}

export function TerminalBlock({ title, children, className, prompt = "betelgeuse@lab" }: TerminalBlockProps) {
  return (
    <div className={cn("terminal-window", className)}>
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        {title && <span className="ml-4 text-[#666] text-sm">{title}</span>}
      </div>
      <div className="p-4 md:p-6 text-sm md:text-base">
        <div className="flex items-start gap-2 mb-2">
          <span className="text-[#00ff88]">{prompt}:~$</span>
          <span className="text-white cursor-blink">_</span>
        </div>
        {children}
      </div>
    </div>
  )
}

export function TerminalOutput({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("pl-4 border-l border-[#333] ml-2 text-[#ccc]", className)}>
      {children}
    </div>
  )
}

export function TerminalCommand({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[#00ff88]">
      <span>$</span>
      <span className="text-white">{children}</span>
    </div>
  )
}

export function TerminalComment({ children }: { children: React.ReactNode }) {
  return <div className="text-[#666]"># {children}</div>
}
