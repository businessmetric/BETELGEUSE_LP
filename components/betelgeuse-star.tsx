"use client"

import { useEffect, useRef } from "react"

export function BetelgeuseStar({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const size = 280
    canvas.width = size
    canvas.height = size
    const centerX = size / 2
    const centerY = size / 2
    const starRadius = 55

    // Sunspots with varying properties
    const sunspots = [
      { baseAngle: 0.3, distance: 0.55, size: 0.22, depth: 0.8 },
      { baseAngle: 1.2, distance: 0.35, size: 0.18, depth: 0.6 },
      { baseAngle: 2.1, distance: 0.7, size: 0.15, depth: 0.9 },
      { baseAngle: 2.9, distance: 0.45, size: 0.25, depth: 0.7 },
      { baseAngle: 3.8, distance: 0.6, size: 0.12, depth: 0.5 },
      { baseAngle: 4.5, distance: 0.25, size: 0.2, depth: 0.85 },
      { baseAngle: 5.2, distance: 0.75, size: 0.1, depth: 0.4 },
      { baseAngle: 5.9, distance: 0.5, size: 0.16, depth: 0.75 },
      { baseAngle: 0.8, distance: 0.8, size: 0.08, depth: 0.3 },
      { baseAngle: 1.7, distance: 0.65, size: 0.14, depth: 0.65 },
    ]

    // Convection cells for surface texture
    const convectionCells: Array<{
      angle: number
      distance: number
      phase: number
      speed: number
    }> = []
    for (let i = 0; i < 30; i++) {
      convectionCells.push({
        angle: Math.random() * Math.PI * 2,
        distance: 0.2 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
        speed: 0.0005 + Math.random() * 0.001,
      })
    }

    let rotation = 0
    let time = 0

    const drawStar = () => {
      // Base gradient - deep red giant colors
      const baseGradient = ctx.createRadialGradient(
        centerX - 8,
        centerY - 8,
        0,
        centerX,
        centerY,
        starRadius
      )
      
      // Slowly shifting color phases
      const colorPhase = Math.sin(time * 0.0003) * 0.5 + 0.5
      const colorPhase2 = Math.sin(time * 0.0005 + 1) * 0.5 + 0.5
      
      // Dynamic red gradients
      const innerR = Math.floor(255)
      const innerG = Math.floor(220 + colorPhase * 35)
      const innerB = Math.floor(180 + colorPhase * 40)
      
      const midR = Math.floor(255)
      const midG = Math.floor(140 + colorPhase2 * 60)
      const midB = Math.floor(50 + colorPhase * 50)
      
      const outerR = Math.floor(200 + colorPhase2 * 55)
      const outerG = Math.floor(60 + colorPhase * 40)
      const outerB = Math.floor(20 + colorPhase2 * 30)

      baseGradient.addColorStop(0, `rgb(${innerR}, ${innerG}, ${innerB})`)
      baseGradient.addColorStop(0.25, `rgb(255, ${180 + colorPhase * 40}, ${80 + colorPhase2 * 40})`)
      baseGradient.addColorStop(0.5, `rgb(${midR}, ${midG}, ${midB})`)
      baseGradient.addColorStop(0.75, `rgb(${220 + colorPhase * 35}, ${80 + colorPhase2 * 30}, ${30 + colorPhase * 20})`)
      baseGradient.addColorStop(1, `rgb(${outerR}, ${outerG}, ${outerB})`)

      ctx.beginPath()
      ctx.arc(centerX, centerY, starRadius, 0, Math.PI * 2)
      ctx.fillStyle = baseGradient
      ctx.fill()

      // Draw convection cells (granulation on star surface)
      convectionCells.forEach((cell) => {
        const cellAngle = cell.angle + rotation * 0.3
        const brightness = Math.sin(time * cell.speed + cell.phase) * 0.5 + 0.5
        const cellX = centerX + Math.cos(cellAngle) * cell.distance * starRadius
        const cellY = centerY + Math.sin(cellAngle) * cell.distance * starRadius
        
        // Only draw on visible side
        const visibility = Math.cos(cellAngle - rotation)
        if (visibility > -0.2) {
          const cellGradient = ctx.createRadialGradient(
            cellX, cellY, 0,
            cellX, cellY, 8 + brightness * 6
          )
          const alpha = (visibility + 0.2) * 0.3 * brightness
          cellGradient.addColorStop(0, `rgba(255, 240, 200, ${alpha})`)
          cellGradient.addColorStop(0.5, `rgba(255, 200, 150, ${alpha * 0.5})`)
          cellGradient.addColorStop(1, "transparent")
          
          ctx.beginPath()
          ctx.arc(cellX, cellY, 8 + brightness * 6, 0, Math.PI * 2)
          ctx.fillStyle = cellGradient
          ctx.fill()
        }
      })

      // Draw sunspots
      sunspots.forEach((spot) => {
        const rotatedAngle = spot.baseAngle + rotation
        
        // Simulate spherical projection - spots appear/disappear at edges
        const cosAngle = Math.cos(rotatedAngle - rotation * 0.5)
        const sinAngle = Math.sin(rotatedAngle - rotation * 0.5)
        
        // Project onto visible hemisphere
        if (cosAngle > -0.1) {
          const projectedDistance = spot.distance * Math.sqrt(1 - sinAngle * sinAngle * 0.3)
          const spotX = centerX + Math.cos(rotatedAngle) * projectedDistance * starRadius
          const spotY = centerY + Math.sin(rotatedAngle) * projectedDistance * starRadius
          
          // Spot size changes based on position (foreshortening)
          const foreshortening = 0.5 + cosAngle * 0.5
          const spotSize = spot.size * starRadius * foreshortening
          
          const visibility = (cosAngle + 0.1) * spot.depth
          
          // Umbra (dark center)
          const umbraGradient = ctx.createRadialGradient(
            spotX, spotY, 0,
            spotX, spotY, spotSize
          )
          umbraGradient.addColorStop(0, `rgba(40, 15, 5, ${visibility * 0.9})`)
          umbraGradient.addColorStop(0.4, `rgba(60, 25, 10, ${visibility * 0.7})`)
          umbraGradient.addColorStop(0.7, `rgba(100, 45, 20, ${visibility * 0.4})`)
          umbraGradient.addColorStop(1, "transparent")

          ctx.beginPath()
          ctx.arc(spotX, spotY, spotSize, 0, Math.PI * 2)
          ctx.fillStyle = umbraGradient
          ctx.fill()
          
          // Penumbra (lighter outer ring)
          const penumbraGradient = ctx.createRadialGradient(
            spotX, spotY, spotSize * 0.6,
            spotX, spotY, spotSize * 1.4
          )
          penumbraGradient.addColorStop(0, "transparent")
          penumbraGradient.addColorStop(0.5, `rgba(80, 35, 15, ${visibility * 0.3})`)
          penumbraGradient.addColorStop(1, "transparent")
          
          ctx.beginPath()
          ctx.arc(spotX, spotY, spotSize * 1.4, 0, Math.PI * 2)
          ctx.fillStyle = penumbraGradient
          ctx.fill()
        }
      })

      // Limb darkening effect (edges darker)
      const limbGradient = ctx.createRadialGradient(
        centerX, centerY, starRadius * 0.6,
        centerX, centerY, starRadius
      )
      limbGradient.addColorStop(0, "transparent")
      limbGradient.addColorStop(0.7, "rgba(80, 20, 10, 0.2)")
      limbGradient.addColorStop(1, "rgba(40, 10, 5, 0.4)")
      
      ctx.beginPath()
      ctx.arc(centerX, centerY, starRadius, 0, Math.PI * 2)
      ctx.fillStyle = limbGradient
      ctx.fill()
    }

    const drawCorona = () => {
      // Inner corona - hot gas
      const innerCorona = ctx.createRadialGradient(
        centerX, centerY, starRadius - 2,
        centerX, centerY, starRadius + 35
      )
      innerCorona.addColorStop(0, "rgba(255, 200, 150, 0.4)")
      innerCorona.addColorStop(0.3, "rgba(255, 150, 80, 0.25)")
      innerCorona.addColorStop(0.6, "rgba(255, 100, 50, 0.15)")
      innerCorona.addColorStop(1, "transparent")

      ctx.beginPath()
      ctx.arc(centerX, centerY, starRadius + 35, 0, Math.PI * 2)
      ctx.fillStyle = innerCorona
      ctx.fill()

      // Outer soft glow
      const outerGlow = ctx.createRadialGradient(
        centerX, centerY, starRadius + 20,
        centerX, centerY, size / 2
      )
      
      const glowPhase = Math.sin(time * 0.0004) * 0.3 + 0.7
      outerGlow.addColorStop(0, `rgba(255, 120, 60, ${0.15 * glowPhase})`)
      outerGlow.addColorStop(0.4, `rgba(255, 80, 40, ${0.08 * glowPhase})`)
      outerGlow.addColorStop(0.7, `rgba(200, 50, 30, ${0.04 * glowPhase})`)
      outerGlow.addColorStop(1, "transparent")

      ctx.beginPath()
      ctx.arc(centerX, centerY, size / 2, 0, Math.PI * 2)
      ctx.fillStyle = outerGlow
      ctx.fill()
    }

    const drawPulseWaves = () => {
      // Very slow, subtle pulse waves
      for (let i = 0; i < 3; i++) {
        const waveTime = ((time * 0.00015) + i * 0.33) % 1
        const waveRadius = starRadius + 15 + waveTime * (size / 2 - starRadius - 30)
        const waveOpacity = (1 - waveTime) * 0.12

        ctx.beginPath()
        ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255, 150, 80, ${waveOpacity})`
        ctx.lineWidth = 1.5
        ctx.stroke()
      }
    }

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, size, size)

      time++
      // Very slow rotation - full rotation in ~60 seconds
      rotation += 0.0008

      drawCorona()
      drawPulseWaves()
      drawStar()

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-[280px] h-[280px]"
        style={{
          filter: "drop-shadow(0 0 40px rgba(255, 100, 50, 0.6)) drop-shadow(0 0 80px rgba(255, 60, 30, 0.3))",
        }}
      />
    </div>
  )
}
