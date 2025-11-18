import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur p-4 text-slate-200 shadow-xl">
          <p className="text-sm">Wir verwenden Cookies, um unsere Website zu verbessern. Details finden Sie in unserer Datenschutzerklärung.</p>
          <div className="mt-3 flex gap-3">
            <button onClick={accept} className="rounded bg-[#0f4c81] px-4 py-2 text-sm text-white hover:bg-[#0e4575]">Akzeptieren</button>
            <button onClick={decline} className="rounded border border-white/20 px-4 py-2 text-sm hover:bg-white/10">Ablehnen</button>
          </div>
        </div>
      </div>
    </div>
  )
}
