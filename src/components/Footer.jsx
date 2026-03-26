import useScrollReveal from '../hooks/useScrollReveal'

export default function Footer() {
  const [ref, visible] = useScrollReveal(0.2)

  return (
    <footer className="footer" ref={ref}>
      <div className={`footer-content ${visible ? 'reveal' : 'hidden-section'}`}>
        <p className="footer-arabic">جزاكم الله خيرا</p>
        <h3 className="footer-names">Danish & Haya Faisal</h3>
        <p className="footer-text">We look forward to celebrating with you</p>
        <p className="footer-hashtag">
          <span className="hashtag-heart">♥</span> #DanishAndHaya2026 <span className="hashtag-heart">♥</span>
        </p>
      </div>
    </footer>
  )
}
