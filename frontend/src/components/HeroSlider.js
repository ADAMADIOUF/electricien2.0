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
      'https://scontent.fdkr5-1.fna.fbcdn.net/v/t39.30808-6/468644328_122186886212178796_6345170879825450466_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lsz5Qc-8IegQ7kNvgFKHlQi&_nc_oc=AdkKCumjyhfphQDN-sRuauTJxDSsrngGljLmVyZ31mpKsITfxjDY-JTfFyaoCJgvEn8OcTaTAFk0RWrgCsCFOMAZ&_nc_zt=23&_nc_ht=scontent.fdkr5-1.fna&_nc_gid=s5dvOA6DfpJ8V6o2DAp1Ew&oh=00_AYHHJuTnt3t1oG_Z_JbKTmLcnnoOGbyF27j8GDxPWwn2VQ&oe=67E9B1D6',
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
      'https://scontent.fdkr6-1.fna.fbcdn.net/v/t39.30808-6/480662510_122203941404178796_5402765707262682573_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=A3pLozJReXQQ7kNvgFlBI6f&_nc_oc=AdkBTEuLmB7BOW--uMhWBo9C1Q8aKy6fdv0lyURHjdC5Tr1DQyyvGw8fHzwlCO-OGwY80VHgeyQ7m4R1yu0xTTBv&_nc_zt=23&_nc_ht=scontent.fdkr6-1.fna&_nc_gid=SBJmOGv2AgAoW5b06A-KUA&oh=00_AYGZjPqyI-ZKdsJLzuytVSidRMIIvXNPKDY22b5LNgmcfQ&oe=67E99FC0',
    title: 'Des Solutions Fiables',
    description:
      'Un service rapide et efficace pour tous vos besoins électriques.',
    buttonText: 'Nos Réalisations',
    buttonLink: '/projects',
  },
  {
    image:
      'https://scontent.fdkr5-1.fna.fbcdn.net/v/t39.30808-6/477125273_122201261198178796_7605886164469801404_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YaWaJrsDoOUQ7kNvgGmbOE8&_nc_oc=AdkugOSGX1wMNxmqAp2Awr0ORD-F0OMYsP9SMZREOy2qU7pWMSUXzHBJ1Pq71CXtEQM1x0itIkwsaTI8uCf1Gtoy&_nc_zt=23&_nc_ht=scontent.fdkr5-1.fna&_nc_gid=E4dEJSwb0L1qKqbdJ162gQ&oh=00_AYHX91Wsb1w6Nl7TYBfscrqr6IqEeB_03bKQKzCq6ig8LQ&oe=67E9AB1E',
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
