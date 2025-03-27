import React, { useState } from 'react'

import imgBig from '../assets/2.png' // Replace with actual image path
import imgSmall from '../assets/1.png' // Replace with actual image path

const faqs = [
  {
    question:
      'Ne puis-je pas simplement appeler un bricoleur pour réparer de petits problèmes électriques ?',
    answer:
      'Bien que les bricoleurs puissent effectuer des réparations générales, les travaux électriques nécessitent des professionnels agréés pour garantir la sécurité et la conformité.',
  },
  {
    question: 'Comment gérez-vous les urgences électriques ?',
    answer:
      "Nous offrons des services d'urgence 24h/24 et 7j/7 pour résoudre rapidement et en toute sécurité vos problèmes électriques.",
  },
  {
    question:
      "Quels sont les signes indiquant que j'ai besoin de réparations électriques ?",
    answer:
      'Les lumières qui clignotent, les odeurs de brûlé, les disjoncteurs qui sautent fréquemment ou les prises qui ne fonctionnent pas sont des signes que vous avez besoin de réparations électriques.',
  },
  {
    question: 'Dois-je être présent lorsque votre équipe travaille ?',
    answer:
      "Ce n'est pas obligatoire, mais recommandé pour faciliter la communication en cas de problème.",
  },
  {
    question: 'Êtes-vous agréés et assurés ?',
    answer:
      'Oui, nous sommes entièrement agréés et assurés pour garantir le plus haut niveau de sécurité et de qualité de service.',
  },
]


const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className='faq-container'>
      {/* First Row - Images */}
      <div className='faq-content'>
        <div className='image-section'>
          <img
            src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/faq-1.jpg'
            alt='Big'
            className='big-image'
          />
          <img
            src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/faq-2.jpg'
            alt='Small'
            className='small-image'
          />
        </div>

        {/* Second Row - FAQ Section */}
        <div className='faq-section'>
          <h2 className='faq-title'>FAQ’S</h2>
          <h3 className='faq-subtitle'>Questions Fréquemment Posées</h3>
          <p className='faq-description'>
            Certaines des questions les plus posées ici par nos précieux
            clients...
          </p>

          <div className='faq-list'>
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <button
                  className='faq-question'
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                  <span
                    className={`icon ${activeIndex === index ? 'open' : ''}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`faq-answer ${
                    activeIndex === index ? 'active' : ''
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq