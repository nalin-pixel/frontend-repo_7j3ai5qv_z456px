export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4 text-slate-300">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-9 w-9 rounded bg-[#0f4c81] flex items-center justify-center text-white font-bold">AS</div>
            <span className="text-white font-semibold">AS Cleantech GmbH</span>
          </div>
          <p className="max-w-md text-sm">Lösungen für Photovoltaik, Speicher und Ladeinfrastruktur für Gewerbe und Industrie. Effizient, skalierbar, nachhaltig.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Rechtliches</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white" href="#">Impressum</a></li>
            <li><a className="hover:text-white" href="#">Datenschutz</a></li>
            <li><a className="hover:text-white" href="#">Cookie-Einstellungen</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Kontakt</h4>
          <ul className="space-y-2 text-sm">
            <li>E-Mail: kontakt@as-cleantech.de</li>
            <li>Tel: +49 (0) 123 456789</li>
            <li>Standort: [Adresse]</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">© {new Date().getFullYear()} AS Cleantech GmbH – Alle Rechte vorbehalten.</div>
    </footer>
  )
}
