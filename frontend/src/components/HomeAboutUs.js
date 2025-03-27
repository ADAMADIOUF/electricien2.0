import React from 'react'
import { MdOutlineElectricBolt, MdOutlineBuild } from 'react-icons/md'
import { FaTools, FaSolarPanel } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { BsDiagram3 } from 'react-icons/bs'
import signature from '../assets/signature.png'
import first from '../assets/4.png'
import second from '../assets/2.png'
const HomeAboutUs = () => {
  return (
    <div className='home-about-us'>
      <div className='home-about-us-container section-center'>
        <article className='home-about-us-big-img'>
          <img
            src='https://i.pinimg.com/736x/a7/59/92/a75992e15c890d30a63bd554f70d2261.jpg'
            alt='À propos de nous'
          />
          <div className='img-fixed'>
            <img src={second} alt='' />
          </div>
          <div className='img-fixed-two'>
            <img src={second} alt='' />
          </div>
          <div className='bg1'>
            <span>30</span>
            <h3>Years Experience of This Field</h3>
          </div>
        </article>
        <article className='home-about-us-details'>
          <h1>À propos de nous</h1>
          <h3 className='home-about-us-details-text'>
            Services électriques résidentiels et commerciaux
          </h3>
          <p>
            Tous nos services sont garantis à 100%. Nos électriciens peuvent
            installer tout, de l'éclairage de sécurité extérieur à un générateur
            domestique complet qui maintiendra vos appareils en fonctionnement
            pendant une coupure de courant.
          </p>
          <div className='home-about-us-tool'>
            <div className='home-about-us-display'>
              <article>
                <div>
                  <MdOutlineElectricBolt className='home-about-icon' />
                </div>
                <div>
                  <h3>Réparations d'urgence</h3>
                </div>
              </article>
              <article>
                <div>
                  <FaTools className='home-about-icon' />
                </div>
                <div>
                  <h3>Rewiring et vérification</h3>
                </div>
              </article>
            </div>
            <div className='home-about-us-check'>
              <div>
                <FaSolarPanel className='home-about-icon' />
                <h3>Solutions d'urgence en énergie (générateurs)</h3>
              </div>
              <div>
                <AiOutlineHome className='home-about-icon' />
                <h3>Câblage et installation/mises à niveau</h3>
              </div>
              <div>
                <BsDiagram3 className='home-about-icon' />
                <h3>Conception et agencement électrique complet</h3>
              </div>
            </div>
            <img src={signature} alt='Signature' className='signature' />
          </div>
        </article>
      </div>
      <div className='about-home-img-fixed'>
        <img
          src={first}
          alt=''
        />
      </div>
    </div>
  )
}

export default HomeAboutUs
