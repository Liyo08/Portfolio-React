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


<li>
          <p
            className='anchorlink'
            onClick={() => {
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            Home
          </p>
        </li><li>
          <p
            className='anchorlink'
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            About Me
          </p>
        </li><li>
          <p
            className='anchorlink'
            onClick={() => {
              document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            Projects
          </p>
        </li>
        <li>
          <p
            className='anchorlink'
            onClick={() => {
              document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            Certificates
          </p>
        </li><li>
          <p
            className='anchorlink'
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            Contact
          </p>
        </li>
       
      </ul>


      <div className='nav-connect'>
       <p
  className='anchorlink'
  onClick={() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }}
>
  Connect with Me
</p>
      </div>
    </div>
  );
}

export default Navbar;
