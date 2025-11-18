import { Routes, Route } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import References from './pages/References'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ueber-uns" element={<About />} />
        <Route path="/leistungen" element={<Services />} />
        <Route path="/leistungen/:slug" element={<ServiceDetail />} />
        <Route path="/referenzen" element={<References />} />
        <Route path="/karriere" element={<Careers />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </SiteLayout>
  )
}

export default App
