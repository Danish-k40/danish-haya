import useScrollReveal from '../hooks/useScrollReveal'

export default function QuranVerse() {
  const [ref, visible] = useScrollReveal(0.2)

  return (
    <section className="quran-section" ref={ref}>
      <div className={`quran-card ${visible ? 'reveal' : 'hidden-section'}`}>
        <div className="quran-ornament">✦</div>
        <p className="quran-arabic">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </p>
        <p className="quran-translation">
          "And among His signs is that He created for you mates from among yourselves,
          that you may dwell in tranquility with them, and He has put love and mercy
          between your hearts."
        </p>
        <p className="quran-reference">— Surah Ar-Rum, 30:21</p>
        <div className="quran-ornament">✦</div>
      </div>
    </section>
  )
}
