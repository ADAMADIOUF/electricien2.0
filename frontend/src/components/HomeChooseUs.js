import React from 'react'
import {
  FaDollarSign,
  FaHeadset,
  FaClipboardCheck,
  FaCogs,
  FaChartLine,
  FaClock,
} from 'react-icons/fa'


const serviceList = [
  { icon: <FaDollarSign />, text: 'Affordable Price' },
  { icon: <FaHeadset />, text: 'Quality Assistance' },
  { icon: <FaClipboardCheck />, text: 'Free Estimation' },
  { icon: <FaCogs />, text: 'Advance Systems' },
  { icon: <FaChartLine />, text: 'Optimized Solutions' },
  { icon: <FaClock />, text: '24/7 Availability' },
]

const HomeChooseUs = () => {
  return (
    <div className='choose-us'>
      <div className='choose-us-container'>
        {/* Left Side - Text Content */}
        <div className='choose-us-text'>
          <h2>Why Choose Us</h2>
          <p className='subtitle'>Great Reasons For People Choose Easton</p>
          <p className='description'>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Enim ad minim veniam quis nostrud
            exercitation ullamco laboris nis ut aliquip ex ea commodo consequat.
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

        {/* Right Side - Overlapping Images */}
        <div className='choose-us-images'>
          <img
            src='https://azim.commonsupport.com/Easton/assets/images/resource/chooseus-1.jpg'
            alt='Choose Us 1'
            className='image-main'
          />
          <img
            src='https://azim.commonsupport.com/Easton/assets/images/resource/chooseus-2.jpg'
            alt='Choose Us 2'
            className='image-overlay'
          />
        </div>
      </div>
    </div>
  )
}

export default HomeChooseUs
