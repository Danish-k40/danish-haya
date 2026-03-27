import { MapPin, Clock, Calendar, ExternalLink } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Events() {
  const [ref, visible] = useScrollReveal(0.15)
  const cls = visible ? 'sr-visible' : ''

  return (
    <section className="events-section" ref={ref}>
      <div className={`event-card-wrapper ${visible ? 'animate-in' : ''}`}>
        <div className="event-card">
          <div className="card-bracket tl" />
          <div className="card-bracket tr" />
          <div className="card-bracket bl" />
          <div className="card-bracket br" />
          <p className={`event-arabic-title sr-fade-down sr-d1 ${cls}`}>قاعة الاحتفالات الملكية</p>
          <h3 className={`event-heading sr-fade-up sr-d2 ${cls}`}>Nikah Ceremony</h3>
          <div className={`event-heading-line sr-scale-x sr-d3 ${cls}`} />

          <div className="event-details">
            <div className={`event-detail sr-fade-right sr-d4 ${cls}`}>
              <Calendar size={16} />
              <span>Saturday, May 9th, 2026</span>
            </div>
            <div className={`event-detail sr-fade-right sr-d5 ${cls}`}>
              <Clock size={16} />
              <span>10:00 AM - 11:00 AM</span>
            </div>
            <div className={`event-detail sr-fade-right sr-d6 ${cls}`}>
              <Clock size={16} />
              <span>Reception 12:00 PM - 3:00 PM</span>
            </div>
            <div className={`event-detail sr-fade-right sr-d7 ${cls}`}>
              <MapPin size={16} />
              <div>
                <strong>ROYAL Convention Centre</strong>
                <br />
                City Center
              </div>
            </div>
          </div>

          <p className={`event-desc sr-fade-up sr-d8 ${cls}`}>The sacred marriage ceremony.</p>

          <a
            href="https://maps.app.goo.gl/7niddYmfrf6eV9TAA"
            target="_blank"
            rel="noopener noreferrer"
            className={`map-btn sr-fade-up sr-d9 ${cls}`}
          >
            <MapPin size={14} />
            View on Google Maps
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  )
}
