import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
   
    return (
        <div className='navbar'>
            <img src="" alt="" />
            <ul className="navmenu">
                <li><AnchorLink className='anchorlink' offset={50} href='#home'><p>Home</p></AnchorLink></li>
                <li><AnchorLink className='anchorlink' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
                <li><AnchorLink className='anchorlink' offset={50} href='#project'><p>Projects</p></AnchorLink></li>
                <li><AnchorLink className='anchorlink' offset={50} href='#certificate'><p>Certificate</p></AnchorLink></li>
                <li><AnchorLink className='anchorlink' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>

            </ul>
            <div className="nav-connect"><AnchorLink className='anchorlink' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
        </div>
    )
}

export default Navbar