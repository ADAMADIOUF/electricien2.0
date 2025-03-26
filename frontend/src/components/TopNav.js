import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa'

const TopNav = () => {
  return (
    <div className='top-nav'>
      <div className='top-nav-left'>
        <span>
          <FaPhone className='nav-icon' /> 77 158 68 69
        </span>
        <span>
          <FaMapMarkerAlt className='nav-icon' />
          Daroi salam, Dakar, Senegal
        </span>
        <span>
          <FaEnvelope className='nav-icon' /> assoselec2h@gmail.com
        </span>
      </div>
      <div className='top-nav-right'>
        <span>Follow Us:</span>
        <a href='#' className='social-icon'>
          <FaFacebookF />
        </a>
        <a href='#' className='social-icon'>
          <FaTwitter />
        </a>
        <a href='#' className='social-icon'>
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  )
}

export default TopNav
