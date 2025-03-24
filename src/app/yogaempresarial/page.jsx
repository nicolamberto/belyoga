import React from 'react'
import BannerEmpresarial from './elements/bannerempresarial'
import BeneficiosEmpresarial from './elements/beneficiosempresarial'
import ActividadesEmpresarial from './elements/actividadesempresarial'
import TarifasEmpresarial from './elements/tarifasempresarial'
import CtaEmpresarial from './elements/ctaempresarial'
import Link from 'next/link'
import divisor from '@/app/lib/divisorfino.png'
import Image from 'next/image'

export default function YogaEmpresarial() {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center gap-10 pb-40 '>
      <BannerEmpresarial />
      <BeneficiosEmpresarial />
      <div className=" w-full flex flex-col justify-center items-center xl:pt-20">
        <Image
          src={divisor}
          className=' absolute w-full '
          alt='divisor'
        />
      </div>
      <ActividadesEmpresarial />
      <TarifasEmpresarial/>
    </div>
  )
}
