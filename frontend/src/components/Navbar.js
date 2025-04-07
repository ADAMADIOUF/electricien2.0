import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
  <img src={logo} alt='Logo' className='logo' />
  <span className='brand-text'>Association Électriciens Du Futur ELEC 2.0 Sénégal</span>
</div>

      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to='/' className='navbar-link' onClick={closeMenu}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to='/about' className='navbar-link' onClick={closeMenu}>
            À propos
          </Link>
        </li>
        <li>
          <Link to='/services' className='navbar-link' onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to='/blog' className='navbar-link' onClick={closeMenu}>
            Blog
          </Link>
        </li>
        <li>
          <Link to='/contact' className='navbar-link' onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li>
          <Link
            to='/appointment'
            className='navbar-link btn-appointment'
            onClick={closeMenu}
          >
            Rendez-vous
          </Link>
        </li>
      </ul>
      <div
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </nav>
  )
}

export default Navbar
