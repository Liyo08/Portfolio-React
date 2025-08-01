import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Certificate from './Components/Certificate/Certificate';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Agriguru from './Components/Agriguru/Agriguru';
import Zenalign from './Components/Zenalign/Zenalign';
import AlignMe from './Components/AlignMe/AlignMe';
import Dromed from './Components/Dromed/Dromed';
import Smart from './Components/Smart/Smart';
import Currency from './Components/Currency/Currency';
import Splash from './Components/Splash/Splash';

const App = () => {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const hideLayoutRoutes = [
    '/projects/agriguru',
    '/projects/zenalign',
    '/projects/alignme',
    '/projects/dromed',
    '/projects/smart',
    '/projects/currency',
  ];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname.toLowerCase());

  if (showSplash) return <Splash />;

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <Routes>
       <Route
  path="/"
  element={
    <div className="fade-in">
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  }
/>

        <Route path="/projects/agriguru" element={<Agriguru />} />
        <Route path="/projects/zenalign" element={<Zenalign />} />
        <Route path="/projects/alignme" element={<AlignMe />} />
        <Route path="/projects/dromed" element={<Dromed />} />
        <Route path="/projects/smart" element={<Smart />} />
        <Route path="/projects/currency" element={<Currency />} />
      </Routes>
    </>
  );
};

export default App;
