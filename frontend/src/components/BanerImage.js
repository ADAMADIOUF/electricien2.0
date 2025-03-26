import React from 'react'
import { MdSafetyDivider, MdElectricalServices, MdBuild } from 'react-icons/md'

const BannerImage = () => {
  return (
    <div className='banner-images'>
      <div className='banner-item'>
        <img
          src='https://i.pinimg.com/736x/bb/e1/0b/bbe10b78c53633ab2588d8d68e8807d1.jpg'
          alt='Inspection de sécurité'
          className='banner-image'
        />
        <div className='banner-text'>
          <div className='banner-icon'>
            <MdSafetyDivider className='icon-banner' />
          </div>
          <h3>Inspection de sécurité</h3>
          <p>
            Assurez la conformité et la sécurité de vos installations grâce à
            des contrôles rigoureux.
          </p>
          <button className='btn'>En savoir plus</button>
        </div>
      </div>

      <div className='banner-item'>
        <img
          src='https://i.pinimg.com/474x/e7/14/bd/e714bdaf4f89d108a6af4627e8a61110.jpg'
          alt='Installation électrique'
          className='banner-image'
        />
        <div className='banner-text'>
          <div className='banner-icon'>
            <MdElectricalServices className='icon-banner' />
          </div>
          <h3>Installation électrique</h3>
          <p>
            Nous réalisons des installations électriques modernes et conformes
            aux normes en vigueur.
          </p>
          <button className='btn'>En savoir plus</button>
        </div>
      </div>

      <div className='banner-item'>
        <img
          src='https://i.pinimg.com/474x/59/79/9e/59799ea3d862ff524b6aaeebe71eabcb.jpg'
          alt='Maintenance et entretien'
          className='banner-image'
        />
        <div className='banner-text'>
          <div className='banner-icon'>
            <MdBuild className='icon-banner' />
          </div>
          <h3>Maintenance et entretien</h3>
          <p>
            Optimisez la durée de vie de vos équipements avec nos services de
            maintenance préventive et corrective.
          </p>
          <button className='btn'>En savoir plus</button>
        </div>
      </div>
    </div>
  )
}

export default BannerImage
