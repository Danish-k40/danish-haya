import { useEffect, useRef, useState } from 'react'
import { MapPin, Clock, Calendar, ExternalLink } from 'lucide-react'

export default function Events() {
  const cardRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="events-section">
      <div ref={cardRef} className={`event-card-wrapper ${visible ? 'animate-in' : ''}`}>
        <div className="event-card">
          <div className="card-bracket tl" />
          <div className="card-bracket tr" />
          <div className="card-bracket bl" />
          <div className="card-bracket br" />
          <p className="event-arabic-title">قاعة الاحتفالات الملكية</p>
          <h3 className="event-heading">Nikah Ceremony</h3>
          <div className="event-heading-line" />

          <div className="event-details">
            <div className="event-detail">
              <Calendar size={16} />
              <span>Saturday, May 9th, 2026</span>
            </div>
            <div className="event-detail">
              <Clock size={16} />
              <span>10:00 AM - 11:00 AM</span>
            </div>
            <div className="event-detail">
              <Clock size={16} />
              <span>Reception 12:00 PM - 3:00 PM</span>
            </div>
            <div className="event-detail">
              <MapPin size={16} />
              <div>
                <strong>ROYAL Convention Centre</strong>
                <br />
                City Center
              </div>
            </div>
          </div>

          <p className="event-desc">The sacred marriage ceremony.</p>

          <a
            href="https://maps.app.goo.gl/7niddYmfrf6eV9TAA"
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
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
