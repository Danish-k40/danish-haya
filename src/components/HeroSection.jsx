import useScrollReveal from '../hooks/useScrollReveal'

export default function HeroSection() {
  const [ref, visible] = useScrollReveal(0.1)
  const cls = visible ? 'sr-visible' : ''

  return (
    <section className="hero-section" ref={ref}>
      <div className="hero-content">
        <p className={`bismillah sr-fade-down sr-d1 ${cls}`}>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>

        <div className={`hero-monogram sr-scale sr-d2 ${cls}`}>
          <span>D</span>
          <span className="hero-mono-heart">♥</span>
          <span>H</span>
        </div>

        <p className={`invite-label sr-fade-up sr-d3 ${cls}`}>Nikah Invitation</p>

        <div className={`diamond-ornament sr-scale sr-d4 ${cls}`}>✦✦</div>

        <p className={`invite-sub sr-fade-up sr-d4 ${cls}`}>Together with their families</p>

        <div className="couple-names">
          <h1 className={`groom-name sr-fade-right sr-d5 ${cls}`}>Danish</h1>
          <div className={`name-divider sr-scale sr-d6 ${cls}`}>
            <div className="name-line" />
            <span className="name-heart">♥</span>
            <div className="name-line" />
          </div>
          <h1 className={`bride-name sr-fade-left sr-d7 ${cls}`}>Haya Faisal</h1>
        </div>

        <p className={`together-text sr-fade-up sr-d8 ${cls}`}>Together with love & blessings</p>

        <div className={`diamond-ornament sr-scale sr-d9 ${cls}`}>✦✦</div>

        <p className={`invite-desc sr-fade-up sr-d9 ${cls}`}>
          With the blessings of Allah (SWT), we invite you to celebrate the union
        </p>

        <div className={`date-display sr-fade-up sr-d10 ${cls}`}>
          <span className="date-main">9th May , Saturday</span>
          <span className="date-hijri">21 Dhu Al-Qidah 1447 AH</span>
        </div>

        <div className={`scroll-indicator sr-fade-up sr-d11 ${cls}`}>
          <div className="mouse">
            <div className="mouse-dot" />
          </div>
        </div>
      </div>
    </section>
  )
}
