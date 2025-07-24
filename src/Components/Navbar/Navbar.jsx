import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
     

      {/* Toggle button visible on small screens */}
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

export default Navbar