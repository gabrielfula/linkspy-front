"use client"

import { useMousePosition } from "@/hooks/use-mouse-position"
import { useEffect, useRef, useState } from "react"

interface SparklesProps {
     id?: string
     background?: string
     minSize?: number
     maxSize?: number
     particleDensity?: number
     className?: string
     particleColor?: string
}

export const SparklesCore = ({
     id = "tsparticles",
     background = "transparent",
     minSize = 0.6,
     maxSize = 1.4,
     particleDensity = 100,
     className = "h-full w-full",
     particleColor = "#FFFFFF",
}: SparklesProps) => {
     const canvasRef = useRef<HTMLCanvasElement>(null);
     const mousePosition = useMousePosition();
     const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

     useEffect(() => {
          setDimensions({
               width: window.innerWidth,
               height: window.innerHeight,
          })

          const canvas = canvasRef.current
          if (!canvas) return

          const ctx = canvas.getContext("2d")
          if (!ctx) return

          let particles: any[] = []
          let animationFrameId: number

          canvas.width = window.innerWidth
          canvas.height = window.innerHeight

          const init = () => {
               particles = []
               for (let i = 0; i < particleDensity; i++) {
                    particles.push({
                         x: Math.random() * canvas.width,
                         y: Math.random() * canvas.height,
                         size: Math.random() * (maxSize - minSize) + minSize,
                         speedX: (Math.random() - 0.5) * 0.1,
                         speedY: (Math.random() - 0.5) * 0.1,
                    })
               }
          }

          const animate = () => {
               if (!ctx) return
               ctx.clearRect(0, 0, canvas.width, canvas.height)

               particles.forEach((particle) => {
                    particle.x += particle.speedX
                    particle.y += particle.speedY

                    if (particle.x > canvas.width) particle.x = 0
                    if (particle.x < 0) particle.x = canvas.width
                    if (particle.y > canvas.height) particle.y = 0
                    if (particle.y < 0) particle.y = canvas.height

                    const dx = mousePosition.x - particle.x
                    const dy = mousePosition.y - particle.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    if (distance < 100) {
                         const angle = Math.atan2(dy, dx)
                         particle.x -= Math.cos(angle) * 1
                         particle.y -= Math.sin(angle) * 1
                    }

                    ctx.fillStyle = particleColor
                    ctx.beginPath()
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                    ctx.fill()
               })

               animationFrameId = requestAnimationFrame(animate)
          }

          init();
          animate();

          const handleResize = () => {
               if (typeof window === "undefined") return;

               canvas.width = window.innerWidth;
               canvas.height = window.innerHeight;
               setDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight,
               });
               init();
          }

          window.addEventListener("resize", handleResize);

          return () => {
               window.removeEventListener("resize", handleResize);
               cancelAnimationFrame(animationFrameId);
          }
     }, [maxSize, minSize, particleColor, particleDensity, mousePosition.x, mousePosition.y])

     return (
          <canvas
               ref={canvasRef}
               id={id}
               className={className}
               style={{
                    background,
                    width: dimensions.width,
                    height: dimensions.height,
               }}
          />
     )
}
