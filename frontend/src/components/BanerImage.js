import React from 'react'
import { MdSafetyDivider, MdElectricalServices, MdBuild } from 'react-icons/md'

const BannerImage = () => {
  return (
    <div className='banner-images'>
      <div className='banner-item'>
        <img
          src='https://scontent.fdkr7-1.fna.fbcdn.net/v/t39.30808-6/480788828_122204809880178796_7521584745096296487_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=W3aK50O1ny4Q7kNvgEa3ZSx&_nc_oc=AdlW4Z1kd_iXL99rm0-Zg8Q-zB1_tlF8aOg3AZ9_qFYj-RTrYzrJ6D2tTvtr4mO00qRXXfNGUPpCcGbnKycwjawv&_nc_zt=23&_nc_ht=scontent.fdkr7-1.fna&_nc_gid=Vw_hQzoJgCp1eSbofx269Q&oh=00_AYGy4a675WFJgQX4e-40_YF4W0BVWTB9HdpY-l-SaPG82g&oe=67EB40C6'
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
          src='https://scontent.fdkr7-1.fna.fbcdn.net/v/t39.30808-6/480466629_122203941278178796_8408142547734089769_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3hCXKkbgHysQ7kNvgEfSH6W&_nc_oc=AdmfH80i7xodqN4pLziE1yQEENWQxOH33n7Qih6_bMRXs4poB7Eps0fGIK5IHE8Vl4PGDEhw1rF-hpYx1vBrelRF&_nc_zt=23&_nc_ht=scontent.fdkr7-1.fna&_nc_gid=qm8jyKjMai8Hn6kGyawREw&oh=00_AYGZcrQQZJSonAdN9CMlV4qxIOaxJZZWOKzeVkbarM2uJQ&oe=67EB5A05'
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
          src='https://scontent.fdkr5-1.fna.fbcdn.net/v/t39.30808-6/473570476_122196262748178796_790151171062577334_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UCYMQpknD5oQ7kNvgEsW6Fm&_nc_oc=AdnVm6_GXY4qb9NG74rZiaAqvdaH14pIzVR6MiItA1wE6itIh-A2j4WIo2S4eO0ZII8yKWdxB7_TMw6fU3hi9Jxm&_nc_zt=23&_nc_ht=scontent.fdkr5-1.fna&_nc_gid=9WIHP8CfBFRY29vU4UBflw&oh=00_AYFVHWUY8t3B1HPMNh1mgHZUhS2ikdWU6bN9PCDspjUdEg&oe=67EB3D8D'
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
