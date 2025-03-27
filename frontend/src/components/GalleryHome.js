import React, { useState, useEffect } from 'react'
import { FaPlusCircle } from 'react-icons/fa'


const galleryData = [
  {
    title: 'Aventure Électrique',
    description:
      'Une vue imprenable sur les installations électriques à travers le pays.',
    img: 'https://23july.hostlin.com/easton/wp-content/uploads/2022/04/project-1.jpg',
  },
  {
    title: 'Vibrations Solaires',
    description:
      "Découvrez l'énergie solaire et ses applications pour un avenir durable.",
    img: 'https://23july.hostlin.com/easton/wp-content/uploads/2022/04/project-2.jpg',
  },
  {
    title: 'Ville Lumineuse',
    description:
      "Les lumières de la ville alimentées par l'énergie renouvelable.",
    img: 'https://23july.hostlin.com/easton/wp-content/uploads/2022/04/project-3.jpg',
  },
  {
    title: 'Retraite Verte',
    description:
      "Un projet d'énergie verte au cœur de la nature pour une production plus propre.",
    img: 'https://23july.hostlin.com/easton/wp-content/uploads/2022/04/project-3.jpg',
  },
]

const GalleryHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length)
    }, 5000) 
    return () => clearInterval(interval)
  }, [])

  const handleClick = (index) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className='gallery-home'>
      <div className='gallery-container'>
        {galleryData.map((item, index) => (
          <div
            key={index}
            className='gallery-item'
            onClick={() => handleClick(index)}
          >
            <div className='image-container'>
              <img src={item.img} alt={item.title} className='gallery-image' />
              <div className='overlay'>
                <div className='overlay-content'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className='icon'>
                    <FaPlusCircle/>
                    </span>{' '}
                  {/* Example icon, can be customized */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying the clicked image */}
      {isModalOpen && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <button className='close-btn' onClick={handleClose}>
              &times;
            </button>
            <div className='modal-image-container'>
              <img
                src={galleryData[currentIndex].img}
                alt={galleryData[currentIndex].title}
                className='modal-image'
              />
              <div className='modal-info'>
                <h3>{galleryData[currentIndex].title}</h3>
                <p>{galleryData[currentIndex].description}</p>
              </div>
            </div>
            <div className='modal-navigation'>
              <button onClick={handlePrev} className='nav-btn'>
                &#8592; Prev
              </button>
              <button onClick={handleNext} className='nav-btn'>
                Next &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryHome
