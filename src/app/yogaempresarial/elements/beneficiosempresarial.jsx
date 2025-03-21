import { tanpearl } from '@/app/layout'
import { beneficiosempresarial } from '@/app/lib/data/data'
import Image from 'next/image'
import React from 'react'

export default function BeneficiosEmpresarial() {
  return (

    <div className="flex flex-col w-full justify-center items-center">
      <p className={`text-[25px] xl:text-[35px] text-[#033908] font-bold pb-6 md:pt-20 ${tanpearl.className}`}>Beneficios</p>
      <div className='flex flex-col md:flex-row justify-center items-center gap-32 md:gap-10 w-[100%] py-20'>

        {beneficiosempresarial.map((item, index) => (
          <div className="bg-white bg-opacity-40 shadow-xl border-[#033908] border-opacity-40 rounded-[50px] pb-10 pt-5 px-5 text-center w-[70%] relative md:w-[25%] xl:w-[20%] flex flex-col gap-5 xl:gap-10 text-[13px] lg:text-[15px] xl:text-[17px] text-[#033908]">
            <p className=' font-bold w-full'>{item.title}</p>
            <p className=' text-opacity-80 text-justify font-[1px] text-[9px] lg:text-[11px] xl:text-[13px]'>{item.text}</p>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src={item.logo}
                width={100}
                alt='logo'
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
