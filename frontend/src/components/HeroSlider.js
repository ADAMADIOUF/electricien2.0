import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    image: '../images/heroslider.png',
    title: 'Bienvenue chez ELEC 2.0 Sénégal!',
    description: "L'avenir de l'électricité commence ici.",
    buttonText: 'Nos Services',
    buttonLink: '/services',
  },
  {
    image:
      'https://scontent.fdkr5-1.fna.fbcdn.net/v/t39.30808-6/487199888_122212438796178796_7070731091741640424_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lypPzgpZcqUQ7kNvwG_2nwh&_nc_oc=Adm7ofizH70jIVipfacCkyStxXxDxnxtskoOzcygydZr_XQrxedkHOYRRjej_p0QRP15ZRQSXa-AHq9QcUmTJqpq&_nc_zt=23&_nc_ht=scontent.fdkr5-1.fna&_nc_gid=uj1ajD32QMn6qRZqYa3SLw&oh=00_AfFj78hz2VpfjjduqdKV9qQziQ5c4GpfCBsJVZVCXU6Y3Q&oe=67F9AB75',
    title: 'Innovation et Expertise',
              description: 'Des solutions électriques modernes et durables.',
    buttonText: 'Nous Contacter',
    buttonLink: '/contact',
  },
  {
    image: '../images/heroslider3.png',
    title: 'Électricité du Futur!',
    description: 'Des professionnels engagés pour votre sécurité.',
    buttonText: 'Découvrir',
    buttonLink: '/about',
  },
  {
    image:
      'https://scontent.fdkr5-1.fna.fbcdn.net/v/t39.30808-6/487241142_122212647908178796_2862524803268585747_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Rvcyt0IsFQMQ7kNvwHz1IvI&_nc_oc=AdmgKCDvNFX3YOFEAQnaMboEs5kc3Qz5Ftq114RqKlChWtmDuJuA1IhbTc6nzW6d9Ny-hJJ69YxkWMynwJ1LfyJ3&_nc_zt=23&_nc_ht=scontent.fdkr5-1.fna&_nc_gid=rC9j_lruVh_LqofOTZD0Rg&oh=00_AfFxufCp8jYfcAXggwE8dRZk2fhGij3pp0jajaGSX507Mg&oe=67F9BB0A',
    title: 'Des Solutions Fiables',
    description:
      'Un service rapide et efficace pour tous vos besoins électriques.',
    buttonText: 'Nos Réalisations',
    buttonLink: '/projects',
  },
  {
    image:
      'https://scontent.fdkr7-1.fna.fbcdn.net/v/t39.30808-6/482250949_122208223424178796_7303668746690616830_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dDK4SdiSBqEQ7kNvwHgv4qm&_nc_oc=AdnD64bGvl2diakLHfRQ9z4Q4keOK7c6TFwpigFreD41OuJeHFJhN_oYQ4uNSAC04IK9XKNtWMA0rY55YS9W-4HM&_nc_zt=23&_nc_ht=scontent.fdkr7-1.fna&_nc_gid=vg3_KdqfTLc4TPwRaUlRtQ&oh=00_AfFeokw04j0WR3YECNT-e-H9OehBcNE8jfPgZ0Hwk2ZKXQ&oe=67F9BC35',
    title: 'Expertise Certifiée',
    description:
      'Nous garantissons un travail sécurisé et conforme aux normes.',
    buttonText: 'En Savoir Plus',
    buttonLink: '/expertise',
  },
]



const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='slider'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          className='slider-wrapper'
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.9 }} 
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className='slider-image'>
            <img src={slides[currentSlide].image} alt='Slider' />
            <div className='slider-overlay'></div>
          </div>
          <div className='text-container'>
            <motion.h1
              className='slide-title'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className='slide-description'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to={slides[currentSlide].buttonLink} className='btn'>
                {slides[currentSlide].buttonText}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default HeroSlider
