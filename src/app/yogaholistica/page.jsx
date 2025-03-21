"use client"

import React, { useState } from 'react'
import EmblaCarouselPropuestas from './components/propuestas/propuestas/EmblaCarouselPropuestas'
import IntroPropuestas from './components/intropropuestas'
import DividerAbout from '../components/divider/dividerabout'
import DividerMobile from '../components/divider/dividermobile'
import divisor2 from '@/app/lib/divisores/desktop/divisorweb2.jpg'
import divisormobile from '@/app/lib/divisores/mobile/divisormobile2.png'
import EndSection from './components/endsection'
import BannerHolistica from './components/bannerholistica'



export default function Clases() {

  return (
    <div className="w-[100%] flex flex-col justify-center items-center pb-36 sm:">
      <BannerHolistica/>
      <IntroPropuestas />
      <EmblaCarouselPropuestas />
      <div className='w-full'>
        <DividerAbout img={divisor2} text={'Encuentra tu paz con el Yoga'} text2={'Conectate con tu cuerpo y mente.'} py={'py-10'} />
        <DividerMobile img={divisormobile} text={'"Enseñar no es un arte mecánico, sino un arte del corazón."'} autor={' B.K.S. Iyengar'} py={'py-10'} />
      </div>
      <EndSection/>
    </div>

  )
}
