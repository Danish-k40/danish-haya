import { MapPin, Clock, Calendar, ExternalLink, Sparkles } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Events() {
  const [ref, visible] = useScrollReveal(0.1)
  const cls = visible ? 'sr-visible' : ''

  return (
    <section className="events-section" ref={ref}>
      <div className={`ev-card-wrap ${visible ? 'ev-animate' : ''}`}>

        <div className="ev-card">
          <div className="ev-glow" />

          <div className={`ev-header sr-fade-down sr-d1 ${cls}`}>
            <div className="ev-icon-ring">
              <Sparkles size={20} />
            </div>
            <p className="ev-arabic">قاعة الاحتفالات الملكية</p>
            <h3 className="ev-title">Nikah Ceremony</h3>
            <div className="ev-title-line">
              <span className="ev-line-dot" />
              <span className="ev-line-bar" />
              <span className="ev-line-dot" />
            </div>
          </div>

          <div className="ev-details">
            <div className={`ev-detail-row sr-fade-right sr-d3 ${cls}`}>
              <div className="ev-detail-icon">
                <Calendar size={16} />
              </div>
              <div className="ev-detail-text">
                <span className="ev-detail-label">Date</span>
                <span className="ev-detail-value">Saturday, May 9th, 2026</span>
              </div>
            </div>

            <div className={`ev-detail-row sr-fade-right sr-d4 ${cls}`}>
              <div className="ev-detail-icon">
                <Clock size={16} />
              </div>
              <div className="ev-detail-text">
                <span className="ev-detail-label">Nikah</span>
                <span className="ev-detail-value">10:00 AM — 11:00 AM</span>
              </div>
            </div>

            <div className={`ev-detail-row sr-fade-right sr-d5 ${cls}`}>
              <div className="ev-detail-icon">
                <Clock size={16} />
              </div>
              <div className="ev-detail-text">
                <span className="ev-detail-label">Reception</span>
                <span className="ev-detail-value">12:00 PM — 3:00 PM</span>
              </div>
            </div>

            <div className={`ev-detail-row sr-fade-right sr-d6 ${cls}`}>
              <div className="ev-detail-icon">
                <MapPin size={16} />
              </div>
              <div className="ev-detail-text">
                <span className="ev-detail-label">Venue</span>
                <span className="ev-detail-value">ROYAL Convention Centre</span>
                <span className="ev-detail-sub">City Center</span>
              </div>
            </div>
          </div>

          <div className={`ev-footer sr-fade-up sr-d8 ${cls}`}>
            <p className="ev-desc">✦ The sacred marriage ceremony ✦</p>
            <a
              href="https://maps.app.goo.gl/7niddYmfrf6eV9TAA"
              target="_blank"
              rel="noopener noreferrer"
              className="ev-map-btn"
            >
              <MapPin size={14} />
              <span>View on Google Maps</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
