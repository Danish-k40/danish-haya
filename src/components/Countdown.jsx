import { useState, useEffect, useRef, useCallback } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const WEDDING_DATE = new Date('2026-05-09T10:00:00')

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

function CircleTimer({ value, label, max, delay, isSeconds }) {
  const radius = 42
  const outerRadius = 47
  const circumference = 2 * Math.PI * radius
  const outerCircumference = 2 * Math.PI * outerRadius
  const progress = (value / max) * circumference
  const offset = circumference - progress

  const angle = (value / max) * 360 * (Math.PI / 180)
  const dotX = 50 + Math.cos(angle) * radius
  const dotY = 50 + Math.sin(angle) * radius

  return (
    <div className="ct-block" style={{ animationDelay: `${delay}ms` }}>
      <div className="ct-ring-wrapper">
        <svg className="ct-svg" viewBox="0 0 100 100" overflow="visible">
          <defs>
            <linearGradient id={`grad-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4a843" />
              <stop offset="50%" stopColor="#e8c84a" />
              <stop offset="100%" stopColor="#c49a2f" />
            </linearGradient>
            <filter id={`glow-${label}`}>
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle className="ct-track-outer" cx="50" cy="50" r={outerRadius} strokeWidth="0.3" />

          {Array.from({ length: 60 }).map((_, i) => {
            const a = (i * 6 - 90) * (Math.PI / 180)
            const r1 = outerRadius - 0.5
            const r2 = i % 5 === 0 ? outerRadius + 2.5 : outerRadius + 1.2
            return (
              <line
                key={i}
                x1={50 + r1 * Math.cos(a)} y1={50 + r1 * Math.sin(a)}
                x2={50 + r2 * Math.cos(a)} y2={50 + r2 * Math.sin(a)}
                className={`ct-tick ${i % 5 === 0 ? 'ct-tick-major' : ''}`}
              />
            )
          })}

          <circle className="ct-track" cx="50" cy="50" r={radius} strokeWidth="2.5" />

          <circle
            className="ct-progress"
            cx="50" cy="50" r={radius}
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            stroke={`url(#grad-${label})`}
            filter={`url(#glow-${label})`}
          />

          <circle
            className="ct-glow-ring"
            cx="50" cy="50" r={radius}
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />

          <circle
            className={`ct-outer-spin ${isSeconds ? 'ct-spin-active' : ''}`}
            cx="50" cy="50" r={outerRadius}
            strokeWidth="0.8"
            strokeDasharray="3 8"
          />

          <circle className="ct-dot-glow" cx={dotX} cy={dotY} r="3.5"
            fill="rgba(201,168,76,0.15)" />
          <circle className="ct-dot-main" cx={dotX} cy={dotY} r="1.8" />
        </svg>

        <div className="ct-center">
          <span className="ct-value" key={value}>{String(value).padStart(2, '0')}</span>
          <span className="ct-label">{label}</span>
        </div>
      </div>
    </div>
  )
}

export default function Countdown() {
  const [sectionRef, sectionVisible] = useScrollReveal(0.15)
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  const [revealed, setRevealed] = useState(false)
  const canvasRef = useRef(null)

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
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + h, h); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(i, h); ctx.lineTo(i + h, 0); ctx.stroke()
    }
    ctx.restore()

    ctx.fillStyle = 'rgba(26, 58, 42, 0.9)'
    ctx.font = '600 16px "Cormorant Garamond", serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('✦  Tap to Reveal  ✦', w / 2, h / 2)
  }, [])

  useEffect(() => {
    if (!revealed) {
      const timeout = setTimeout(initCanvas, 100)
      window.addEventListener('resize', initCanvas)
      return () => { clearTimeout(timeout); window.removeEventListener('resize', initCanvas) }
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
    { value: timeLeft.days, label: 'Days', max: 365 },
    { value: timeLeft.hours, label: 'Hours', max: 24 },
    { value: timeLeft.minutes, label: 'Minutes', max: 60 },
    { value: timeLeft.seconds, label: 'Seconds', max: 60 },
  ]

  return (
    <section className="countdown-section" ref={sectionRef}>
      <div className={`countdown-inner ${sectionVisible ? 'reveal' : 'hidden-section'}`}>
        <div className="countdown-sparkle-icon">
          <span>✦</span>
        </div>

        <h2 className="countdown-title">Counting Down to Forever</h2>
        <p className="countdown-subtitle">The blessed day is approaching</p>

        <div className="ct-scratch-wrapper">
          <div className={`ct-content ${revealed ? 'ct-revealed' : ''}`}>
            <div className="ct-row">
              {blocks.map((block, i) => (
                <CircleTimer
                  key={block.label}
                  value={block.value}
                  label={block.label}
                  max={block.max}
                  delay={i * 150}
                  isSeconds={block.label === 'Seconds'}
                />
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
