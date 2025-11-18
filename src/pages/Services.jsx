import { Link } from 'react-router-dom'

const services = [
  { slug: 'photovoltaik', title: 'Photovoltaik', desc: 'Dach, Freifläche, Carports, Statik & Netzanschluss' },
  { slug: 'speicher', title: 'Speicher', desc: 'Heimspeicher bis Großspeicher, Mittelspannung' },
  { slug: 'ladeinfrastruktur', title: 'Ladeinfrastruktur', desc: 'AC/DC, Lastmanagement, Abrechnung' },
  { slug: 'wartung', title: 'Wartung & Monitoring', desc: '24/7 Monitoring, Wartungspakete' },
  { slug: 'beratung', title: 'Beratung & Planung', desc: 'Wirtschaftlichkeit, Förderungen, Simulation' },
]

export default function Services() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Leistungen</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Link key={s.slug} to={`/leistungen/${s.slug}`} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            <span className="mt-4 inline-block text-[#0f4c81] font-semibold">Details</span>
          </Link>
        ))}
      </div>
    </main>
  )
}
