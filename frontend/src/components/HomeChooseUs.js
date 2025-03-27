import React, { useState } from 'react'
import {
  FaDollarSign,
  FaHeadset,
  FaClipboardCheck,
  FaCogs,
  FaChartLine,
  FaClock,
  FaPlayCircle,
} from 'react-icons/fa'

import second from '../assets/6.png'
const serviceList = [
  { icon: <FaDollarSign />, text: 'Prix Abordables' },
  { icon: <FaHeadset />, text: 'Assistance de Qualité' },
  { icon: <FaClipboardCheck />, text: 'Estimation Gratuite' },
  { icon: <FaCogs />, text: 'Systèmes Avancés' },
  { icon: <FaChartLine />, text: 'Solutions Optimisées' },
  { icon: <FaClock />, text: 'Disponibilité 24/7' },
]

const HomeChooseUs = () => {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <div className='choose-us'>
      <div className='img-fixed'>
        <img src={second} alt='' />
      </div>
      <div className='img-fixed-three'>
        <img src={second} alt='' />
      </div>
      <div className='choose-us-container'>
        <div className='choose-us-text'>
          <h2>Pourquoi Nous Choisir</h2>
          <p className='subtitle'>Excellentes Raisons Pour Choisir Easton</p>
          <p className='description'>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Enim ad minim veniam quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className='choose-us-list'>
            {serviceList.map((service, index) => (
              <div key={index} className='choose-us-item'>
                <div className='icon'>{service.icon}</div>
                <span>{service.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='choose-us-images'>
          <img
            src='https://scontent.fdkr6-1.fna.fbcdn.net/v/t39.30808-6/484966849_122210693360178796_8685904774130637300_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j6o0GCNsyKUQ7kNvgE53Geb&_nc_oc=AdkK5ldGys68eyFacsNRa4CrsPoCBRzTPuw5vdLjZ8cz3lPHFH8KSbQ2UQdvcX1tQzhK_vNP0bWtDpuVqPxefc_E&_nc_zt=23&_nc_ht=scontent.fdkr6-1.fna&_nc_gid=SnFdXNmviYRDBUnlbRl1Pw&oh=00_AYELqsYQFm0eHQR0-gao8KR4jtlSUqirNlHpUBHqTXtX_g&oe=67EB5119'
            alt='Choose Us 1'
            className='image-main'
          />
          <div className='video-container'>
            <img
              src='https://scontent.fdkr6-1.fna.fbcdn.net/v/t39.30808-6/481767325_122206697666178796_3867559721773901613_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rDsUuS7RX4MQ7kNvgFPdDEw&_nc_oc=AdnZA7--cvriRDWym--Xj-VnOS2Us_4toJ1GO8Drl1iSVqtuBwhTVUWvhxQVqPDiP0pT3sDN63P9H5O0bQleR4kZ&_nc_zt=23&_nc_ht=scontent.fdkr6-1.fna&_nc_gid=fWMgn2IVHcV7wFOHf-UDlg&oh=00_AYFP0ObtMbiflFiYEGQYtfa6f1jImMbbi7TxqY7c_tVp9g&oe=67EB2C51'
              alt='Choose Us 2'
              className='image-overlay'
            />
            <button className='video-icon' onClick={() => setVideoOpen(true)}>
              <FaPlayCircle />
            </button>
          </div>
        </div>
      </div>

      {/* Popup Vidéo */}
      {videoOpen && (
        <div className='video-popup'>
          <div className='video-content'>
            <button className='close-btn' onClick={() => setVideoOpen(false)}>
              &times;
            </button>
            <iframe
              width='560'
              height='315'
              src='https://scontent.xx.fbcdn.net/o1/v/t2/f2/m69/AQOKJ0Sr4xsc82-sEvzV36uyNfZEHXl6eJWQJVjc5hdsGzqiAtq-59PGSHdj6HPvKp7J9e545njrmrj7-5egBaif.mp4?strext=1&_nc_cat=102&_nc_oc=Adl2VuQs5Q0WRboHWiLgGEpV_LmELJPJMyhSB_XGcFSY_11e93LNMNsBIuu-b2Yo9eZdxgWSxjiHI6zElPSTInIv&_nc_sid=8bf8fe&_nc_ht=video.fdkr5-1.fna.fbcdn.net&_nc_ohc=VL5ZVCPeehQQ7kNvgHQheTL&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzNlLjY0MC5zdmVfc2QiLCJ4cHZfYXNzZXRfaWQiOjExMTc5NDg4ODYwMzY1NTUsImFzc2V0X2FnZV9kYXlzIjo0NDgsInZpX3VzZWNhc2VfaWQiOjEwMTIyLCJkdXJhdGlvbl9zIjoyNywidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_zt=28&oh=00_AYEYEs5qRAIrbbu_iEsQvIRErFOy5TDiwofiCZPw-ba1zw&oe=67EB5560'
              title='Lecteur vidéo YouTube'
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeChooseUs
