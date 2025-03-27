import React, { useEffect, useRef } from 'react'

const partners = [
  'https://23july.hostlin.com/easton/wp-content/uploads/2022/05/5.png',
  'https://23july.hostlin.com/easton/wp-content/uploads/2022/05/3.png',
  'https://23july.hostlin.com/easton/wp-content/uploads/2022/05/1.png',
  'https://23july.hostlin.com/easton/wp-content/uploads/2022/05/4.png',
  'https://23july.hostlin.com/easton/wp-content/uploads/2022/05/1.png',
  'https://23july.hostlin.com/easton/wp-content/uploads/2022/05/2.png',
  'https://23july.hostlin.com/easton/wp-content/uploads/2022/05/6.png',
  'https://23july.hostlin.com/easton/wp-content/uploads/2022/05/7.png',
  'https://i.pinimg.com/474x/0c/2c/fd/0c2cfd2cebc399b6043d748d21369d7c.jpg',
  'https://i.pinimg.com/474x/66/b7/33/66b7339e38c22af6acf08a97f20545b3.jpg',
]

const Partener = () => {
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current
    let interval

    const startSlider = () => {
      interval = setInterval(() => {
        if (slider) {
          slider.scrollLeft += 200 // Moves 200px per step
          if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) {
            slider.scrollLeft = 0 // Reset to the start
          }
        }
      }, 3000) // Change slide every 3 seconds
    }

    startSlider()

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='partner-container'>
      <div className='partner-slider' ref={sliderRef}>
        {partners.map((partner, index) => (
          <div key={index} className='partner-slide'>
            <img src={partner} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partener
