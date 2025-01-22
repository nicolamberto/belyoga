"use client"

import React, { useState } from 'react'
import Card from '../card'
import { clases } from '@/app/lib/data/data'
import IntroClases from '../introclases'


export default function Clases() {

  const [expandedCard, setExpandedCard] = useState(null)

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }


  return (
    <div className="w-[100%] flex justify-center items-center">

      <div className=' z-50 flex flex-col justify-center items-center w-[60%] py-[200px]'>

        <IntroClases />


        {/* <p className=' text-4xl text-gray-800'>NUESTRAS CLASES</p> */}
        <div className='flex flex-col justify-center items-center gap-10 w-[100%]'>
          {clases.map(item => (
            <Card
              key={item.id}
              id={item.id}
              title={item.nombre}
              description={item.descripcion}
              img={item.img}
              description2={item.descripcion2}
              onClick={handleCardClick}
              isExpanded={expandedCard === item.id}
            />
          ))}
        </div>


      </div>
    </div>

  )
}
