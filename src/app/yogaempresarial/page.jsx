import React from 'react'
import BannerEmpresarial from './elements/bannerempresarial'
import BeneficiosEmpresarial from './elements/beneficiosempresarial'
import ActividadesEmpresarial from './elements/actividadesempresarial'
import TarifasEmpresarial from './elements/tarifasempresarial'
import CtaEmpresarial from './elements/ctaempresarial'
import Link from 'next/link'

export default function YogaEmpresarial() {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center gap-10 '>
        <BannerEmpresarial/>
        <BeneficiosEmpresarial/>
        <Link href={'/yogaconvencional'} className='border border-[#033908] rounded-full px-6 py-2 cursor-pointer hover:bg-[#033908] hover:text-[#f5ebe0] transition '>Consulta Ahora</Link>

    </div>
  )
}
