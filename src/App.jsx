import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Certificate from './Components/Certificate/Certificate'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import Agriguru from './Components/Agriguru/Agriguru'
import AlignMe from './Components/AlignMe/AlignMe'
import Currency from './Components/Currency/Currency'
import Dromed from './Components/Dromed/Dromed'
import Smart from './Components/Smart/Smart'
import Zenalign from './Components/Zenalign/Zenalign'

const App = () => {
  return (
    <>
      <Navbar />

      {/* Routes only handle switching between main pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Project />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/projects/agriguru" element={<Agriguru />} />
        <Route path="/projects/alignme" element={<AlignMe />} />
        <Route path="/projects/currency" element={<Currency />} />
        <Route path="/projects/dromed" element={<Dromed />} />
        <Route path="/projects/smart" element={<Smart />} />
        <Route path="/projects/zenalign" element={<Zenalign />} />
      </Routes>
    </>
  )
}

export default App
