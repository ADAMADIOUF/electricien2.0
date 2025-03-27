import React from 'react'
import HeroSlider from '../components/HeroSlider'
import RequestServices from '../components/RequestServices'
import HomeAboutUs from '../components/HomeAboutUs'
import BannerImage from '../components/BanerImage'
import HomeService from '../components/HomeService'
import HomeChooseUs from '../components/HomeChooseUs'
import OurStaff from '../components/OurStaff'
import GalleryHome from '../components/GalleryHome'
import Faq from '../components/Faq'
import Partener from '../components/Partener'

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <RequestServices />
      <HomeAboutUs />
      <BannerImage />
      <HomeChooseUs />
      <HomeService />
      <OurStaff/>
      <GalleryHome/>
      <Faq/>
      <Partener/>
    </div>
  )
}

export default HomePage
