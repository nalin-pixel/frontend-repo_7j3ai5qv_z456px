import { useParams } from 'react-router-dom'

const copy = {
  photovoltaik: {
    title: 'Photovoltaik',
    text: 'Wir realisieren PV-Anlagen für Gewerbe/Industrie: Dach, Freifläche, Carports. Von Statik über Netzanschluss bis Inbetriebnahme.'
  },
  speicher: {
    title: 'Speicher',
    text: 'Skalierbare Speicherlösungen von Heimspeicher bis Großspeicher, inklusive EMS und Mittelspannung.'
  },
  ladeinfrastruktur: {
    title: 'Ladeinfrastruktur',
    text: 'AC/DC-Laden mit Lastmanagement, eichrechtskonformer Abrechnung und Backend-Anbindung.'
  },
  wartung: {
    title: 'Wartung & Monitoring',
    text: '24/7 Monitoring, proaktive Wartung, Störungsmanagement, Reporting.'
  },
  beratung: {
    title: 'Beratung & Planung',
    text: 'Wirtschaftlichkeitsanalysen, Förderberatung, technische Planung, Simulation (PVsyst).' 
  }
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = copy[slug] || { title: 'Leistung', text: 'Details folgen.' }
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{s.title}</h1>
      <p className="mt-4 text-slate-700 max-w-3xl">{s.text}</p>
    </main>
  )
}
