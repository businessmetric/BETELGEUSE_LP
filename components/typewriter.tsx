"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  texts: string[]
  className?: string
}

export function Typewriter({ texts, className = "" }: TypewriterProps) {
  const [displayText, setDisplayText] = useState(texts[0] || "")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(texts[0]?.length || 0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentTextIndex]
    
    if (!isDeleting && currentCharIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentCharIndex + 1))
        setCurrentCharIndex(currentCharIndex + 1)
      }, 80)
      return () => clearTimeout(timeout)
    } else if (isDeleting && currentCharIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentCharIndex - 1))
        setCurrentCharIndex(currentCharIndex - 1)
      }, 40)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && currentCharIndex === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(timeout)
    } else if (isDeleting && currentCharIndex === 0) {
      setIsDeleting(false)
      setCurrentTextIndex((currentTextIndex + 1) % texts.length)
    }
  }, [currentCharIndex, currentTextIndex, isDeleting, texts])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
