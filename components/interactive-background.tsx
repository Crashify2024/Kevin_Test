"use client"

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  radius: number
  color: string
  vx: number
  vy: number
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let car1X = -100
    let car2X = canvas.width + 100
    const carY = canvas.height - 100
    const carWidth = 80
    const carHeight = 40
    const speed = 5
    let crashed = false
    let crashTime = 0
    let particles: Particle[] = []

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

    function drawCar(x: number, type: 'sporty' | 'super-sporty', crashed: boolean = false) {
      ctx.save()
      ctx.translate(x, carY)

      if (crashed) {
        ctx.transform(1, 0.2, 0.1, 1, 0, 0) // Skew the car slightly
      }

      if (type === 'sporty') {
        // Sporty car body
        ctx.fillStyle = '#4169E1'
        ctx.beginPath()
        ctx.moveTo(0, carHeight)
        ctx.lineTo(carWidth, carHeight)
        ctx.lineTo(carWidth - 5, 15)
        ctx.lineTo(10, 15)
        ctx.closePath()
        ctx.fill()
        
        // Sporty roof
        ctx.fillStyle = '#6495ED'
        ctx.beginPath()
        ctx.moveTo(20, 15)
        ctx.lineTo(carWidth - 15, 15)
        ctx.lineTo(carWidth - 25, 5)
        ctx.lineTo(30, 5)
        ctx.closePath()
        ctx.fill()
        
        // Windows
        ctx.fillStyle = '#87CEFA'
        ctx.fillRect(35, 7, 15, 10)
        
        // Wheels
        ctx.fillStyle = '#000'
        ctx.beginPath()
        ctx.arc(15, carHeight, 10, 0, Math.PI * 2)
        ctx.arc(carWidth - 15, carHeight, 10, 0, Math.PI * 2)
        ctx.fill()
      } else {
        // Super sporty car body
        ctx.fillStyle = '#FF4500'
        ctx.beginPath()
        ctx.moveTo(0, carHeight)
        ctx.lineTo(carWidth, carHeight)
        ctx.lineTo(carWidth - 5, 10)
        ctx.lineTo(5, 15)
        ctx.closePath()
        ctx.fill()
        
        // Super sporty roof
        ctx.fillStyle = '#FF6347'
        ctx.beginPath()
        ctx.moveTo(15, 15)
        ctx.lineTo(carWidth - 10, 10)
        ctx.lineTo(carWidth - 20, 3)
        ctx.lineTo(25, 5)
        ctx.closePath()
        ctx.fill()
        
        // Windows
        ctx.fillStyle = '#FFD700'
        ctx.fillRect(30, 5, 20, 8)
        
        // Wheels
        ctx.fillStyle = '#000'
        ctx.beginPath()
        ctx.arc(15, carHeight, 12, 0, Math.PI * 2)
        ctx.arc(carWidth - 15, carHeight, 12, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()
    }

    function createParticles(x: number, y: number) {
      for (let i = 0; i < 200; i++) {
        particles.push({
          x: x + Math.random() * carWidth,
          y: y + Math.random() * carHeight,
          radius: Math.random() * 5 + 2,
          color: ['#FF4500', '#FF6347', '#FFD700', '#4169E1'][Math.floor(Math.random() * 4)],
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10
        })
      }
    }

    function updateParticles() {
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.1 // gravity
        p.radius *= 0.99 // shrink particles

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        if (p.radius < 0.1) {
          particles.splice(i, 1)
          i--
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawRoad()

      if (!crashed) {
        car1X += speed
        car2X -= speed
        drawCar(car1X, 'sporty')
        ctx.save()
        ctx.scale(-1, 1)
        drawCar(-car2X - carWidth, 'super-sporty')
        ctx.restore()

        if (car1X + carWidth > car2X) {
          crashed = true
          crashTime = 0
          createParticles((car1X + car2X + carWidth) / 2, carY)
        }
      } else {
        crashTime++
        
        // Draw crashed cars
        drawCar(car1X, 'sporty', true)
        ctx.save()
        ctx.scale(-1, 1)
        drawCar(-car2X - carWidth, 'super-sporty', true)
        ctx.restore()

        if (crashTime <= 18) { // 0.3 seconds at 60fps
          updateParticles()
          
          if (crashTime % 2 === 0) {
            createParticles((car1X + car2X + carWidth) / 2, carY)
          }
        }

        if (crashTime > 60) { // 0.3 seconds for particles + 0.7 seconds for crashed state = 1 second total
          crashed = false
          particles = []
          car1X = -100
          car2X = canvas.width + 100
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      car2X = canvas.width + 100
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

