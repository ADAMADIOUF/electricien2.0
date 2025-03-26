import React from 'react'
import HeroSlider from '../components/HeroSlider'
import RequestServices from '../components/RequestServices'
import HomeAboutUs from '../components/HomeAboutUs'
import BannerImage from '../components/BanerImage'
import HomeService from '../components/HomeService'
import HomeChooseUs from '../components/HomeChooseUs'

const HomePage = () => {
  return (
    <div>
      <HeroSlider/>
      <RequestServices/>
      <HomeAboutUs/>
      <BannerImage/>
      <HomeService/>
      <HomeChooseUs/>
    </div>
  )
}

export default HomePage
