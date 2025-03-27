import React, { useState, useEffect } from 'react'

// Example staff data with 9 members
const staffData = [
  {
    name: 'John Doe',
    image:
      'https://i.pinimg.com/474x/81/ba/19/81ba193ec690744bd8019f620121d985.jpg',
    description:
      "John est un électricien expérimenté avec plus de 10 ans d'expertise dans le câblage résidentiel et commercial.",
  },
  {
    name: 'Jane Smith',
    image:
      'https://i.pinimg.com/474x/86/b7/8e/86b78ea0e5f3e42536039cf952e52365.jpg',
    description:
      "Jane se spécialise dans les solutions électriques écoénergétiques, fournissant des résultats optimaux pour tous les types d'installations.",
  },
  {
    name: 'Michael Johnson',
    image:
      'https://i.pinimg.com/474x/cd/c7/a2/cdc7a2494475c3885c5618dcc7af716a.jpg',
    description:
      'Michael est connu pour sa compréhension approfondie des systèmes électriques et son engagement à fournir un service de haute qualité.',
  },
  {
    name: 'Sarah Lee',
    image:
      'https://i.pinimg.com/474x/cb/3c/36/cb3c36fd8603f60c2278c4b222e24887.jpg',
    description:
      'Sarah est une électricienne certifiée qui se concentre sur la sécurité et la fiabilité dans tous ses projets, grands ou petits.',
  },
  {
    name: 'David Williams',
    image:
      'https://i.pinimg.com/474x/09/1d/68/091d68367a57ee96faf6de4616b33982.jpg',
    description:
      'David est un expert en dépannage et offre les meilleures solutions électriques adaptées aux besoins des clients.',
  },
  {
    name: 'Emily Davis',
    image:
      'https://i.pinimg.com/474x/bb/e1/0b/bbe10b78c53633ab2588d8d68e8807d1.jpg',
    description:
      'Emily se concentre sur la mise à niveau des systèmes électriques, en veillant à ce que les installations soient efficaces et rentables.',
  },
  {
    name: 'James Brown',
    image:
      'https://i.pinimg.com/474x/25/45/24/25452485ec2409e704223ade94588e56.jpg',
    description:
      'James est expérimenté avec les systèmes électriques commerciaux et industriels, offrant un travail de haute qualité.',
  },
  {
    name: 'Linda Martinez',
    image:
      'https://i.pinimg.com/474x/f7/9d/04/f79d042f2e6c2b354e948806ba52f05f.jpg',
    description:
      'Linda est une électricienne professionnelle dédiée à fournir des systèmes électriques fiables et sûrs pour ses clients.',
  },
  {
    name: 'Robert Garcia',
    image:
      'https://i.pinimg.com/474x/a2/9f/f0/a29ff01a57ab2b1ec0e59ae7e63650d1.jpg',
    description:
      'Robert apporte une grande expérience dans les services électriques résidentiels, offrant des résultats impeccables pour chaque projet.',
  },
]


const OurStaff = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Automatically cycle through staff every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % staffData.length)
    }, 5000)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval)
  }, [])

  // Slice the staff array to get 3 staff members to display at a time
  const staffToDisplay = staffData.slice(currentIndex, currentIndex + 3)

  return (
    <div className='our-staff'>
      <h2>Nos Électriciens Professionnels</h2>
      <div className='staff-slider'>
        <div className='staff-container'>
          {staffToDisplay.map((staff, index) => (
            <div className='staff-item'>
              <div className='staff-image-container'>
                <img
                  src={staff.image}
                  alt={staff.name}
                  className='staff-image'
                />
              </div>
              <h3>{staff.name}</h3>
              <p>{staff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurStaff
