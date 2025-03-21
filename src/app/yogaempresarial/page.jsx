import React from 'react'
import BannerEmpresarial from './elements/bannerempresarial'
import BeneficiosEmpresarial from './elements/beneficiosempresarial'
import ActividadesEmpresarial from './elements/actividadesempresarial'
import TarifasEmpresarial from './elements/tarifasempresarial'
import CtaEmpresarial from './elements/ctaempresarial'
import Link from 'next/link'

export default function YogaEmpresarial() {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center gap-10 pb-40 '>
        <BannerEmpresarial/>
        <BeneficiosEmpresarial/>
        <Link target='_blank' href={'https://api.whatsapp.com/send?phone=5493518522977&text=Hola!%20Quiero%20averiguar%20mas%20sobre%20yoga!%20Mi%20nombre%20es:%20'} className='border border-[#033908] rounded-full px-6 py-2 cursor-pointer hover:bg-[#033908] hover:text-[#f5ebe0] transition '>Consulta Ahora</Link>
    </div>
  )
}
