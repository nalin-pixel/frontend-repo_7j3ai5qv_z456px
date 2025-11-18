import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
