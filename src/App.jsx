import React from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Agriguru from './Components/Agriguru/Agriguru'
import Zenalign from './Components/Zenalign/Zenalign'
import AlignMe from './Components/AlignMe/AlignMe'
import Dromed from './Components/Dromed/Dromed'
import Currency from './Components/Currency/Currency'
import Smart from './Components/Smart/Smart'

const App = () => {
  const location = useLocation()

  // Routes where you do NOT want the navbar/footer
  const hideLayoutRoutes = [
    '/projects/agriguru',
    '/projects/zenalign',
    '/projects/alignme',
    '/projects/dromed',
    '/projects/smart',
    '/projects/currency'
  ]

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname.toLowerCase())

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Project />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/projects/agriguru" element={<Agriguru />} />
        <Route path="/projects/zenalign" element={<Zenalign />} />
        <Route path="/projects/alignme" element={<AlignMe />} />
        <Route path="/projects/dromed" element={<Dromed />} />
        <Route path="/projects/smart" element={<Smart />} />
        <Route path="/projects/currency" element={<Currency />} />
      </Routes>
    </>
  )
}

export default App
