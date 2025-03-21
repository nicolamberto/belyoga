"use client"

import React, { useState } from 'react'
import Card from '../components/clases/card'
import { yogaconvencional, yogaconvencionalsub } from '@/app/lib/data/data'
import IntroClases from '../components/clases/introclases'
import { yogaConvencional } from '@/app/lib/data/data'
import EmblaCarouselClases from './components/clases/clases/EmblaCarouselClases'
import YogaNidra from './components/nidra/yoganidra'
import divisor2 from '@/app/lib/divisores/desktop/divisorweb2.jpg'
import divisormobile from '@/app/lib/divisores/mobile/divisormobile2.png'
import DividerAbout from '../components/divider/dividerabout'
import DividerMobile from '../components/divider/dividermobile'
import BannerConvencional from './components/bannerconvencional'

export default function Clases() {

  const [expandedCard, setExpandedCard] = useState(null)

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }


  return (

    <div className="w-[100%] flex flex-col justify-center items-center gap-10">
      <BannerConvencional/>
      <EmblaCarouselClases />

      <div className='w-full'>
        <DividerAbout img={divisor2} text={'"Enseñar no es un arte mecánico, sino un arte del corazón."'} autor={' B.K.S. Iyengar'} py={'py-10'}/>
        <DividerMobile img={divisormobile} text={'"Enseñar no es un arte mecánico, sino un arte del corazón."'} autor={' B.K.S. Iyengar'} py={'sm:py-10'}/>
      </div>

      <YogaNidra />
    </div>

  )
}
