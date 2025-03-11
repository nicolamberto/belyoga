"use client"

import React, { useState } from 'react'
import Card from '../components/clases/card'
import { yogaconvencional, yogaconvencionalsub } from '@/app/lib/data/data'
import IntroClases from '../components/clases/introclases'
import { yogaConvencional } from '@/app/lib/data/data'
import EmblaCarouselClases from './components/clases/clases/EmblaCarouselClases'
import YogaNidra from './components/nidra/yoganidra'

export default function Clases() {

  const [expandedCard, setExpandedCard] = useState(null)

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }


  return (

    <div className="w-[100%] flex flex-col justify-center items-center gap-28 py-20">

      <EmblaCarouselClases />

      <YogaNidra />

      <div className=' z-10 flex flex-col justify-center items-center w-[60%] py-20'>
        {/* <p className=' text-4xl text-gray-800'>NUESTRAS CLASES</p> */}
        <div className='flex flex-col justify-center items-center gap-10 w-[100%]'>
          {yogaconvencionalsub.map(item => (
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
