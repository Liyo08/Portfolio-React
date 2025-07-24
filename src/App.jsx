import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Certificate from './Components/Certificate/Certificate'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Certificate/>
      <Contact/>
    </div>
  )
}

export default App