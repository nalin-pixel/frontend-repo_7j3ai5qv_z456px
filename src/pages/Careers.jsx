export default function Careers() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Karriere</h1>
      <p className="mt-4 max-w-3xl text-slate-700">Werden Sie Teil unseres Teams. Wir suchen Fachkräfte in Projektleitung, Elektrotechnik, Montage und Vertrieb. Bewerben Sie sich initiativ oder auf ausgeschriebene Positionen.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[
          { role: 'Projektleiter:in PV', location: 'München', type: 'Vollzeit' },
          { role: 'Elektromeister:in', location: 'Stuttgart', type: 'Vollzeit' }
        ].map((job) => (
          <div key={job.role} className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{job.role}</h3>
            <p className="text-sm text-slate-600">{job.location} • {job.type}</p>
            <a href="#" className="mt-4 inline-block text-[#0f4c81] font-semibold">Details & Bewerben</a>
          </div>
        ))}
      </div>
    </main>
  )
}
