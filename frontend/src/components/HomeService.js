import React, { useState } from 'react'
import {
  MdAcUnit,
  MdOutlineLocalFireDepartment,
  MdLightbulb,
  MdSecurity,
  MdPower,
  MdElectricalServices,
  MdPhone,
  MdBuild,
  MdBolt,
  MdWbIncandescent,
  MdHotTub,
  MdHouseSiding,
} from 'react-icons/md'
import first from "../assets/3.png"
const servicesData = {
  Domestique: {
    description:
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    details: [
      {
        name: 'Climatisation',
        icon: <MdAcUnit size={20} color='#007bff' />,
      },
      {
        name: 'Service de chauffage',
        icon: <MdOutlineLocalFireDepartment size={20} color='#ff5733' />,
      },
      {
        name: 'Éclairage intérieur',
        icon: <MdLightbulb size={20} color='#ffc107' />,
      },
      {
        name: 'Système de sécurité',
        icon: <MdSecurity size={20} color='#28a745' />,
      },
    ],
    img: 'https://azim.commonsupport.com/Easton/assets/images/service/service-1.jpg',
  },
  Industriel: {
    description:
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    details: [
      {
        name: 'Climatisation',
        icon: <MdAcUnit size={20} color='#007bff' />,
      },
      {
        name: 'Service de chauffage',
        icon: <MdOutlineLocalFireDepartment size={20} color='#ff5733' />,
      },
      {
        name: 'Éclairage intérieur',
        icon: <MdLightbulb size={20} color='#ffc107' />,
      },
      {
        name: 'Système de sécurité',
        icon: <MdSecurity size={20} color='#28a745' />,
      },
      {
        name: 'Prises électriques',
        icon: <MdPower size={20} color='#17a2b8' />,
      },
      {
        name: 'Tableaux électriques',
        icon: <MdElectricalServices size={20} color='#6610f2' />,
      },
    ],
    img: null, // Pas d'image disponible
  },
  Commercial: {
    description:
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    details: [
      {
        name: 'Climatisation',
        icon: <MdAcUnit size={20} color='#007bff' />,
      },
      {
        name: 'Systèmes de chauffage électrique',
        icon: <MdOutlineLocalFireDepartment size={20} color='#ff5733' />,
      },
      {
        name: 'Câblage téléphone & ordinateur',
        icon: <MdPhone size={20} color='#17a2b8' />,
      },
      { name: 'Éclairage', icon: <MdLightbulb size={20} color='#ffc107' /> },
      {
        name: 'Prises électriques',
        icon: <MdPower size={20} color='#6610f2' />,
      },
      {
        name: 'Surchauffe des appareils',
        icon: <MdBuild size={20} color='#dc3545' />,
      },
      {
        name: 'Surtensions fréquentes',
        icon: <MdBolt size={20} color='#f39c12' />,
      },
      {
        name: 'Factures d’électricité en hausse',
        icon: <MdWbIncandescent size={20} color='#6f42c1' />,
      },
      {
        name: 'Lumières vacillantes',
        icon: <MdLightbulb size={20} color='#ffc107' />,
      },
      {
        name: 'Câblage piscine & spa',
        icon: <MdHotTub size={20} color='#20c997' />,
      },
      {
        name: 'Parafoudre général',
        icon: <MdSecurity size={20} color='#28a745' />,
      },
      {
        name: 'Nouvelle construction',
        icon: <MdHouseSiding size={20} color='#fd7e14' />,
      },
    ],
    img: 'https://azim.commonsupport.com/Easton/assets/images/service/service-2.jpg',
  },
}

const HomeService = () => {
  const [selectedService, setSelectedService] = useState('Domestique')

  return (
    <div className='home-services'>
      <div className='home-services-details'>
        <h1>Nos Services</h1>
        <h3>Nous sommes un entrepreneur électrique à service complet</h3>
      </div>

      {/* Boutons de filtre */}
      <div className='service-filter'>
        {Object.keys(servicesData).map((serviceType) => (
          <button
            key={serviceType}
            className={selectedService === serviceType ? 'active' : ''}
            onClick={() => setSelectedService(serviceType)}
          >
            Services {serviceType}
          </button>
        ))}
      </div>

      {/* Détails du service */}
      <div className='service-card'>
        <h2>Services {selectedService}</h2>
        <p>{servicesData[selectedService].description}</p>

        <ul className='service-list'>
          {servicesData[selectedService].details.map((item, index) => (
            <li key={index}>
              {item.icon} {item.name}
            </li>
          ))}
        </ul>

        {/* Afficher l'image uniquement si elle est disponible */}
        {servicesData[selectedService].img && (
          <img
            src={servicesData[selectedService].img}
            alt={`Service ${selectedService}`}
          />
        )}
      </div>
      <div className='homeservices-first-img'>
        <img src={first} alt='' />
      </div>
      <div className='homeservices-second-img'>
        <img
          src='https://i.pinimg.com/474x/ed/a2/46/eda24672419178acb8ef75924c427837.jpg'
          alt=''
        />
      </div>
    </div>
  )
}

export default HomeService
