"use client"

import React, { useEffect, useRef } from 'react'

interface Car {
  x: number
  y: number
  speed: number
  color: string
  type: 'porsche' | 'gwagon'
}

export function AccidentAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const car1: Car = { x: -100, y: canvas.height - 100, speed: 5, color: '#4169E1', type: 'porsche' }
    const car2: Car = { x: canvas.width + 100, y: canvas.height - 100, speed: -5, color: '#FF4500', type: 'gwagon' }

    let crashed = false
    let crashTime = 0

    function drawRoad() {
      ctx.fillStyle = '#333'
      ctx.fillRect(0, canvas.height - 50, canvas.width, 50)

      ctx.strokeStyle = '#FFF'
      ctx.setLineDash([20, 20])
      ctx.beginPath()
      ctx.moveTo(0, canvas.height - 25)
      ctx.lineTo(canvas.width, canvas.height - 25)
      ctx.stroke()
    }

    function drawCar(car: Car, crashed: boolean = false) {
      ctx.save()
      ctx.translate(car.x, car.y)

      if (crashed) {
        ctx.transform(1, 0.2, 0.1, 1, 0, 0) // Skew the car slightly
      }

      const carWidth = 100
      const carHeight = 40

      if (car.type === 'porsche') {
        // Porsche 911 body
        ctx.fillStyle = car.color
        ctx.beginPath()
        ctx.moveTo(0, carHeight)
        ctx.lineTo(carWidth, carHeight)
        ctx.lineTo(carWidth - 10, 20)
        ctx.quadraticCurveTo(carWidth / 2, 0, 20, 20)
        ctx.closePath()
        ctx.fill()
        
        // Porsche 911 roof
        ctx.fillStyle = shadeColor(car.color, 20)
        ctx.beginPath()
        ctx.moveTo(30, 20)
        ctx.lineTo(carWidth - 30, 20)
        ctx.quadraticCurveTo(carWidth / 2, 10, 30, 20)
        ctx.fill()
        
        // Windows
        ctx.fillStyle = '#87CEFA'
        ctx.beginPath()
        ctx.moveTo(35, 20)
        ctx.lineTo(carWidth - 35, 20)
        ctx.quadraticCurveTo(carWidth / 2, 15, 35, 20)
        ctx.fill()
        
        // Wheels
        ctx.fillStyle = '#000'
        ctx.beginPath()
        ctx.arc(20, carHeight, 10, 0, Math.PI * 2)
        ctx.arc(carWidth - 20, carHeight, 10, 0, Math.PI * 2)
        ctx.fill()

        // Headlights
        ctx.fillStyle = '#FFFF00'
        ctx.beginPath()
        ctx.ellipse(carWidth - 10, 25, 5, 8, 0, 0, Math.PI * 2)
        ctx.ellipse(carWidth - 25, 25, 5, 8, 0, 0, Math.PI * 2)
        ctx.fill()
      } else {
        // G-Wagon body
        ctx.fillStyle = car.color
        ctx.fillRect(0, 10, carWidth, carHeight - 10)
        
        // G-Wagon roof
        ctx.fillStyle = shadeColor(car.color, 20)
        ctx.fillRect(10, 0, carWidth - 20, 15)
        
        // Windows
        ctx.fillStyle = '#87CEFA'
        ctx.fillRect(15, 5, 25, 10)
        ctx.fillRect(50, 5, 25, 10)
        
        // Wheels
        ctx.fillStyle = '#000'
        ctx.beginPath()
        ctx.arc(20, carHeight, 12, 0, Math.PI * 2)
        ctx.arc(carWidth - 20, carHeight, 12, 0, Math.PI * 2)
        ctx.fill()

        // Headlights
        ctx.fillStyle = '#FFFF00'
        ctx.beginPath()
        ctx.rect(carWidth - 25, 15, 10, 10)
        ctx.rect(carWidth - 10, 15, 10, 10)
        ctx.fill()
      }

      ctx.restore()
    }

    function drawCrashEffect(x: number, y: number) {
      ctx.fillStyle = '#FFD700'
      ctx.beginPath()
      ctx.arc(x, y, 50 * Math.random() + 10, 0, Math.PI * 2)
      ctx.fill()
    }

    function shadeColor(color: string, percent: number) {
      const num = parseInt(color.replace("#",""), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = (num >> 8 & 0x00FF) + amt,
      B = (num & 0x0000FF) + amt;
      return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
    }

    function drawCarParts(x: number, y: number, color: string) {
      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = color
        ctx.beginPath()
        const size = Math.random() * 8 + 4
        ctx.moveTo(x + (Math.random() - 0.5) * 100, y + (Math.random() - 0.5) * 100)
        ctx.lineTo(x + (Math.random() - 0.5) * 100 + size, y + (Math.random() - 0.5) * 100 + size)
        ctx.lineTo(x + (Math.random() - 0.5) * 100 - size, y + (Math.random() - 0.5) * 100 + size)
        ctx.closePath()
        ctx.fill()
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawRoad()

      if (!crashed) {
        car1.x += car1.speed
        car2.x += car2.speed
        drawCar(car1)
        ctx.save()
        ctx.scale(-1, 1)
        drawCar({...car2, x: -car2.x - 100})
        ctx.restore()

        if (car1.x + 100 > car2.x) {
          crashed = true
          crashTime = 0
        }
      } else {
        crashTime++
        drawCar({...car1, x: car1.x - 10}, true)
        ctx.save()
        ctx.scale(-1, 1)
        drawCar({...car2, x: -(car2.x + 10) - 100}, true)
        ctx.restore()

        if (crashTime <= 18) { // 0.3 seconds at 60fps
          drawCarParts((car1.x + car2.x + 100) / 2, car1.y - 20, car1.color)
          drawCarParts((car1.x + car2.x + 100) / 2, car1.y - 20, car2.color)
          drawCrashEffect((car1.x + car2.x + 100) / 2, car1.y - 20)
        } else if (crashTime > 18) {
          // Reset the animation
          car1.x = -100
          car2.x = canvas.width + 100
          crashed = false
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      car2.x = canvas.width + 100
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

