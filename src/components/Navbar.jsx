import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/referenzen', label: 'Referenzen' },
  { to: '/karriere', label: 'Karriere' },
  { to: '/kontakt', label: 'Kontakt' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded bg-[#0f4c81] flex items-center justify-center text-white font-bold">AS</div>
            <span className="text-white font-semibold">AS Cleantech GmbH</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded border border-white/10 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü öffnen"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded px-3 py-2 text-sm font-medium ${isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/10 hover:text-white'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
