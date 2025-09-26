"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

export function Timer() {
  const [timeLeft, setTimeLeft] = useState(20 * 60) // 20 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) {
      document.body.innerHTML = `
        <div style="text-align: center; padding: 50px 20px; background: #f9f9f9; min-height: 100vh; display: flex; flex-direction: column; justify-content: center;">
          <h1 style="color: #dc2626; font-size: clamp(32px, 6vw, 48px); margin-bottom: 20px;">⏰ OFERTA EXPIRADA</h1>
          <p style="font-size: clamp(20px, 4vw, 24px); margin-bottom: 30px;">El Sistema de Blindaje ahora cuesta $97</p>
          <p style="font-size: clamp(16px, 3vw, 18px); color: #666;">Esta oferta especial de $27 ya no está disponible.</p>
          <p style="font-size: clamp(14px, 3vw, 16px); color: #999; margin-top: 20px;">Tu inversión de $26 queda sin protección.</p>
        </div>
      `
      return
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const getTimerColor = () => {
    if (timeLeft <= 120) return "gradient-danger" // Last 2 minutes
    if (timeLeft <= 300) return "gradient-warning" // Last 5 minutes
    if (timeLeft <= 600) return "bg-orange-500" // Last 10 minutes
    return "bg-gray-800"
  }

  const getAnimationClass = () => {
    if (timeLeft <= 120) return "animate-pulse-glow"
    if (timeLeft <= 300) return "animate-pulse"
    return ""
  }

  return (
    <Card className="glass-lg p-8 text-center border-orange-500/50 animate-slide-up">
      <div className="text-lg font-bold text-orange-600 mb-4">⏰ Esta oferta expira en:</div>
      <div
        className={`inline-block ${getTimerColor()} text-white px-8 py-4 rounded-xl text-4xl md:text-5xl font-black ${getAnimationClass()}`}
      >
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      <p className="text-sm text-muted-foreground mt-4">Después tendrás que pagar $97 por el Sistema de Blindaje</p>
    </Card>
  )
}
