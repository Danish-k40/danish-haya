import useScrollReveal from '../hooks/useScrollReveal'

export default function Footer() {
  const [ref, visible] = useScrollReveal(0.2)
  const cls = visible ? 'sr-visible' : ''

  return (
    <footer className="footer" ref={ref}>
      <div className="footer-content">
        <p className={`footer-arabic sr-fade-down sr-d1 ${cls}`}>جزاكم الله خيرا</p>
        <h3 className={`footer-names sr-scale sr-d3 ${cls}`}>Danish & Haya Faisal</h3>
        <p className={`footer-text sr-fade-up sr-d5 ${cls}`}>We look forward to celebrating with you</p>
        <p className={`footer-hashtag sr-fade-up sr-d7 ${cls}`}>
          <span className="hashtag-heart">♥</span> #DanishAndHaya2026 <span className="hashtag-heart">♥</span>
        </p>
      </div>
    </footer>
  )
}
