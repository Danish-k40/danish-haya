import useScrollReveal from '../hooks/useScrollReveal'

export default function QuranVerse() {
  const [ref, visible] = useScrollReveal(0.2)
  const cls = visible ? 'sr-visible' : ''

  return (
    <section className="quran-section" ref={ref}>
      <div className="quran-card">
        <div className={`quran-ornament sr-scale sr-d1 ${cls}`}>✦</div>
        <p className={`quran-arabic sr-fade-up sr-d2 ${cls}`}>
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </p>
        <p className={`quran-translation sr-fade-up sr-d4 ${cls}`}>
          "And among His signs is that He created for you mates from among yourselves,
          that you may dwell in tranquility with them, and He has put love and mercy
          between your hearts."
        </p>
        <p className={`quran-reference sr-fade-up sr-d6 ${cls}`}>— Surah Ar-Rum, 30:21</p>
        <div className={`quran-ornament sr-scale sr-d7 ${cls}`}>✦</div>
      </div>
    </section>
  )
}
