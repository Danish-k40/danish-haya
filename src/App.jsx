import { useState } from 'react'
import OpeningScreen from './components/OpeningScreen'
import HeroSection from './components/HeroSection'
import Countdown from './components/Countdown'
import Events from './components/Events'
import QuranVerse from './components/QuranVerse'
import Footer from './components/Footer'
import { useParallax } from './hooks/useScrollReveal'
import './App.css'

function App() {
  const [revealed, setRevealed] = useState(false)
  const [doorsGone, setDoorsGone] = useState(false)
  const parallaxRef = useParallax()

  const handleReveal = () => {
    setRevealed(true)
    setTimeout(() => setDoorsGone(true), 2100)
  }

  return (
    <div className="app">
      <main className={`main-content ${revealed ? 'appear' : ''}`}>
        <HeroSection />
        <Countdown />
        <div className="section-divider" ref={parallaxRef}>
          <div className="sparkle-anim">✦</div>
        </div>
        <Events />
        <QuranVerse />
        <Footer />
      </main>
      {!doorsGone && <OpeningScreen onReveal={handleReveal} />}
    </div>
  )
}

export default App
