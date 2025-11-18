import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white text-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_200px_at_10%_10%,#0f4c81_20%,transparent_60%)]/10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Cleantech-Lösungen für Unternehmen</h1>
            <p className="mt-4 text-lg text-slate-600">Planung, Installation und Betrieb von PV-Anlagen, Speichern und Ladeinfrastruktur – schlüsselfertig und skalierbar.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/kontakt" className="inline-flex items-center gap-2 rounded bg-[#0f4c81] px-5 py-3 font-semibold text-white hover:bg-[#0e4575]">
                Angebot anfordern <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/leistungen" className="inline-flex items-center gap-2 rounded border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">
                Leistungen
              </a>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-slate-700">
              {['100 % Fokus auf Gewerbe & Industrie','Schnelle Projektumsetzung','Wartung & Monitoring inklusive'].map((b) => (
                <li key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> {b}</li>
              ))}
            </ul>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              {[
                { k: '> 15 Jahre', v: 'Erfahrung' },
                { k: '> [X] MWp', v: 'installiert' },
                { k: '> [Y]', v: 'betreute Anlagen' }
              ].map((s) => (
                <div key={s.v} className="rounded-lg bg-slate-50 p-3">
                  <div className="text-xl font-bold text-[#0f4c81]">{s.k}</div>
                  <div className="text-xs text-slate-600">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Unsere Leistungen</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Photovoltaik', desc: 'Dachanlagen, Freifläche, Carports' },
              { title: 'Speicher', desc: 'Lithium-Ionen, Mittelspannung' },
              { title: 'Ladeinfrastruktur', desc: 'AC/DC, Lastmanagement' },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                <a href="/leistungen" className="mt-4 inline-block text-[#0f4c81] font-semibold">Mehr erfahren</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Kunden & Partner</h2>
          <div className="overflow-hidden rounded-xl border bg-white p-4">
            <div className="flex gap-12 animate-[scroll_30s_linear_infinite]" style={{'@keyframes scroll': '{from{transform:translateX(0)}to{transform:translateX(-50%)}}'}}>
              {['Varta','SMA','Viessmann','Siemens','ABB','E.ON','EnBW','RWE'].map((logo) => (
                <div key={logo} className="shrink-0 w-40 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 font-semibold">{logo}</div>
              ))}
              {['Varta','SMA','Viessmann','Siemens','ABB','E.ON','EnBW','RWE'].map((logo) => (
                <div key={logo+2} className="shrink-0 w-40 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 font-semibold">{logo}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f4c81] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Zitat der Geschäftsführung</h2>
            <p className="mt-4 text-white/80">„[Zitat von [Name Geschäftsführer/in]] – unser Anspruch ist messbare Ergebnisse, verlässliche Umsetzung und echte Nachhaltigkeit.“</p>
            <p className="mt-2 text-sm text-white/70">– [Name Geschäftsführer/in], Geschäftsführung</p>
          </div>
          <div className="rounded-xl bg-white/10 p-6">
            <h3 className="text-lg font-semibold">Bereit für Ihr Projekt?</h3>
            <p className="text-white/80 mt-2">Sprechen Sie mit uns – wir beraten Sie individuell zu Wirtschaftlichkeit, Technik und Förderung.</p>
            <a href="/kontakt" className="mt-4 inline-flex items-center gap-2 rounded bg-white px-4 py-2 font-semibold text-[#0f4c81] hover:bg-white/90">Kontakt aufnehmen <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
    </>
  )
}
