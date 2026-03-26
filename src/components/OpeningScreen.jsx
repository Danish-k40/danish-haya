import { useState } from 'react'

export default function OpeningScreen({ onReveal }) {
  const [animating, setAnimating] = useState(false)

  const handleClick = () => {
    setAnimating(true)
    onReveal()
  }

  return (
    <div className="opening-wrapper" onClick={!animating ? handleClick : undefined}>
      <div className={`door door-left ${animating ? 'open' : ''}`}>
        <div className="door-content left">
          <div className="opening-ornament top-left" />
          <div className="opening-ornament bottom-left" />
        </div>
      </div>

      <div className={`door door-right ${animating ? 'open' : ''}`}>
        <div className="door-content right">
          <div className="opening-ornament top-right" />
          <div className="opening-ornament bottom-right" />
        </div>
      </div>


      <div className={`door-overlay ${animating ? 'fade-out' : ''}`}>
        <div className="bismillah-top">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
        <div className="monogram-container">
          <div className="monogram-ring">
            <span className="monogram-text">D<span className="monogram-heart">♥</span>H</span>
          </div>
        </div>
        <div className="opening-names">Danish & Haya</div>
        <div className="tap-reveal">
          <div className="tap-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122M5.98 11.95l-2.121 2.122" />
            </svg>
          </div>
          <span>Tap to Reveal</span>
        </div>
      </div>
    </div>
  )
}
