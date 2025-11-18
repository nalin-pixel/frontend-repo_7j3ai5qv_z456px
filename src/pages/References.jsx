import { useMemo, useState } from 'react'

const projects = [
  { id: 1, name: 'PV-Dach [500 kWp]', type: 'Photovoltaik', location: 'München', year: 2023 },
  { id: 2, name: 'Gewerbespeicher [1,2 MWh]', type: 'Speicher', location: 'Stuttgart', year: 2024 },
  { id: 3, name: 'Flottenladen [DC 300 kW]', type: 'Ladeinfrastruktur', location: 'Nürnberg', year: 2022 },
  { id: 4, name: 'Carport [250 kWp]', type: 'Photovoltaik', location: 'Augsburg', year: 2023 },
]

export default function References() {
  const [filter, setFilter] = useState('Alle')

  const categories = ['Alle', ...Array.from(new Set(projects.map(p => p.type)))]

  const filtered = useMemo(() => {
    if (filter === 'Alle') return projects
    return projects.filter(p => p.type === filter)
  }, [filter])

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Referenzen</h1>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map(c => (
          <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-4 py-2 text-sm border ${filter===c ? 'bg-[#0f4c81] text-white border-[#0f4c81]' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}>{c}</button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {filtered.map((p) => (
          <div key={p.id} className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="aspect-video rounded-lg bg-slate-100" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.name}</h3>
            <p className="text-sm text-slate-600">{p.type} • {p.location} • {p.year}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
