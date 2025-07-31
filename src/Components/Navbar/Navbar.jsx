import React, { useEffect, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [slideIn, setSlideIn] = useState(false); // 👈 new state

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlideIn(true);
    }, 200); // Delay slide-in slightly for a nice entry

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`navbar ${slideIn ? 'slide-in-navbar' : ''}`}>
      <div className='toggle-btn' onClick={handleToggle}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <ul className={`navmenu ${isOpen ? 'open' : ''}`}>
        <li><AnchorLink className='anchorlink' offset={50} href='#home'><p>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchorlink' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchorlink' offset={50} href='#project'><p>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchorlink' offset={50} href='#certificate'><p>Certificate</p></AnchorLink></li>
        <li><AnchorLink className='anchorlink' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
      </ul>

      <div className='nav-connect'>
        <AnchorLink className='anchorlink' offset={50} href='#contact'>Connect with Me</AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
