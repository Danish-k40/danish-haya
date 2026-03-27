import useScrollReveal from '../hooks/useScrollReveal'

export default function HeroSection() {
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <section className="hero-section" ref={ref}>
      <div className={`hero-content ${visible ? 'reveal' : 'hidden-section'}`}>
        <p className="bismillah">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>

        <div className="hero-monogram">
          <span>D</span>
          <span className="hero-mono-heart">♥</span>
          <span>H</span>
        </div>

        <p className="invite-label">Nikah Invitation</p>

        <div className="diamond-ornament">✦✦</div>

        <p className="invite-sub">Together with their families</p>

        <div className="couple-names">
          <h1 className="groom-name">Danish</h1>
          <div className="name-divider">
            <div className="name-line" />
            <span className="name-heart">♥</span>
            <div className="name-line" />
          </div>
          <h1 className="bride-name">Haya Faisal</h1>
        </div>

        <p className="together-text">Together with love & blessings</p>

        <div className="diamond-ornament">✦✦</div>

        <p className="invite-desc">
          With the blessings of Allah (SWT), we invite you to celebrate the union
        </p>

        <div className="date-display">
          <span className="date-main">9th May , Saturday</span>
          <span className="date-hijri">21 Dhu Al-Qidah 1447 AH</span>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="mouse-dot" />
          </div>
        </div>
      </div>
    </section>
  )
}
