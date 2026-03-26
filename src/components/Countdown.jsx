import { useState, useEffect, useRef, useCallback } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const WEDDING_DATE = new Date('2026-05-09T10:00:00')

export default function Countdown() {
  const [sectionRef, sectionVisible] = useScrollReveal(0.15)
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  const [revealed, setRevealed] = useState(false)
  const canvasRef = useRef(null)

  function getTimeLeft() {
    const diff = WEDDING_DATE - new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * 2
    canvas.height = rect.height * 2
    const ctx = canvas.getContext('2d')
    ctx.scale(2, 2)

    const w = rect.width
    const h = rect.height

    const grad = ctx.createLinearGradient(0, 0, w, h)
    grad.addColorStop(0, '#c49a2f')
    grad.addColorStop(0.25, '#d4a843')
    grad.addColorStop(0.5, '#e8c84a')
    grad.addColorStop(0.75, '#d4a843')
    grad.addColorStop(1, '#c49a2f')

    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.roundRect(0, 0, w, h, 18)
    ctx.fill()

    ctx.save()
    ctx.beginPath()
    ctx.roundRect(0, 0, w, h, 18)
    ctx.clip()

    ctx.strokeStyle = 'rgba(255,255,255,0.15)'
    ctx.lineWidth = 0.6
    const spacing = 18
    for (let i = -Math.max(w, h); i < Math.max(w, h) * 2; i += spacing) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i + h, h)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(i, h)
      ctx.lineTo(i + h, 0)
      ctx.stroke()
    }
    ctx.restore()

    ctx.fillStyle = 'rgba(26, 58, 42, 0.9)'
    ctx.font = '600 16px "Cormorant Garamond", serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('✦  Scratch to Reveal  ✦', w / 2, h / 2)
  }, [])

  useEffect(() => {
    if (!revealed) {
      const timeout = setTimeout(initCanvas, 100)
      window.addEventListener('resize', initCanvas)
      return () => {
        clearTimeout(timeout)
        window.removeEventListener('resize', initCanvas)
      }
    }
  }, [revealed, initCanvas])

  function handleTap() {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.style.transition = 'opacity 0.6s ease'
      canvas.style.opacity = '0'
      setTimeout(() => setRevealed(true), 600)
    }
  }

  const blocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ]

  return (
    <section className="countdown-section" ref={sectionRef}>
      <div className={`countdown-inner ${sectionVisible ? 'reveal' : 'hidden-section'}`}>
      <div className="countdown-sparkle-icon">
        <span>✦</span>
      </div>
      <h2 className="countdown-title">Counting Down to Forever</h2>
      <p className="countdown-subtitle">The blessed day is approaching</p>

      <div className="scratch-wrapper">
        <div className={`countdown-content ${revealed ? 'revealed' : ''}`}>
          <div className="countdown-row">
            {blocks.map((block) => (
              <div className="countdown-block" key={block.label}>
                <div className="corner-bracket tl" />
                <div className="corner-bracket tr" />
                <div className="corner-bracket bl" />
                <div className="corner-bracket br" />
                <span className="countdown-value">
                  {String(block.value).padStart(2, '0')}
                </span>
                <span className="countdown-label">{block.label}</span>
              </div>
            ))}
          </div>
        </div>

        {!revealed && (
          <canvas
            ref={canvasRef}
            className="scratch-canvas"
            onClick={handleTap}
            onTouchEnd={handleTap}
          />
        )}
      </div>
      </div>
    </section>
  )
}
