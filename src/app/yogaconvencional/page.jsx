"use client"

import React, { useState } from 'react'
import Card from '../components/clases/card'
import { yogaconvencional, yogaconvencionalsub } from '@/app/lib/data/data'
import IntroClases from '../components/clases/introclases'
import { yogaConvencional } from '@/app/lib/data/data'
import EmblaCarouselClases from './components/clases/clases/EmblaCarouselClases'

export default function Clases() {

  const [expandedCard, setExpandedCard] = useState(null)

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }


  return (
    
    <div className="w-[100%] flex flex-col justify-center items-center bg-[#f5ebe0] bg-opacity-60">

      <EmblaCarouselClases/>

      {/* {yogaConvencional.map(item => (
        <div className='flex flex-col justify-center items-center w-[60%] py-20'>
          <p className='text-[80px] text-[#033908] text-center py-8'>
            {item.name}
          </p>

          <div className=" flex flex-col gap-6">
            <p>{item.text1}</p>
            <p>{item.text2}</p>
            <p>{item.text3}</p>
            <p>{item.text4}</p>

          </div>

          <div className='flex flex-row justify-between items-center pt-20 pb-5 w-[80%]'>

            <div className="">
              <p className='text-[#033908] font-semibold'>CLASES PRESENCIALES</p>
              <ul className='flex flex-col gap-2 list-disc px-7'>
                <li>Lunes</li>
                <li>Miercoles</li>
                <li>Viernes</li>
              </ul>
            </div>

            <div className="">
              <p className='text-[#033908] font-semibold'>CLASES VIRTUALES</p>
              <ul className='flex flex-col gap-2 list-disc px-7'>
                <li>Lunes</li>
                <li>Miercoles</li>
                <li>Viernes</li>
              </ul>
            </div>

            <div className="">
              <p className='text-[#033908] font-semibold'>CLASES MIXTAS</p>
              <ul className='flex flex-col gap-2 list-disc px-7'>
                <li>Lunes</li>
                <li>Miercoles</li>
                <li>Viernes</li>
              </ul>
            </div>

          </div>

          <button className='border hover:border-[#033908] rounded-full px-6 py-2 mt-5 cursor-pointer bg-[#033908] text-[#f5ebe0] hover:text-[#033908] hover:bg-transparent transition '>Reserva Tu Clase Ya!</button>


        </div>
      ))} */}

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
