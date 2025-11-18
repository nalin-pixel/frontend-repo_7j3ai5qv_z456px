export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Über uns</h1>
      <p className="mt-4 max-w-3xl text-slate-700">Wir sind ein auf Gewerbe und Industrie spezialisiertes Cleantech-Unternehmen. Unser Team plant, installiert und betreibt Photovoltaik-, Speicher- und Ladeinfrastrukturprojekte in ganz DACH – zuverlässig, transparent und mit Fokus auf messbaren Mehrwert.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { k: 'Standorte', v: '[Stadt 1], [Stadt 2]' },
          { k: 'Mitarbeitende', v: '[Zahl]' },
          { k: 'Zertifizierungen', v: 'ISO 9001, E-Marke' }
        ].map((item) => (
          <div key={item.k} className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">{item.k}</div>
            <div className="text-xl font-semibold text-slate-900">{item.v}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
