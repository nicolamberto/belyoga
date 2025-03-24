import React from 'react'

import { tanpearl } from '@/app/layout'
import { tarifas } from '@/app/lib/data/data'

import check from '@/app/lib/empresarial/tilde.png'
import Image from 'next/image'
import Link from 'next/link'


export default function TarifasEmpresarial() {
  return (
    <div className='w-[90%] xl:w-[60%] flex flex-col justify-center items-center p-10 my-10 rounded-[50px]'>
      <p className={`text-[25px] xl:text-[35px] text-[#033908] font-bold text-center ${tanpearl.className} pb-10`}>Planes & Tarifas</p>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        {
          tarifas.map((item, index) => (
            <div className={`flex flex-col justify-between gap-5 items-center px-5 py-10 border-[#033908] text-[#033908] ${item.diferencial ? 'rounded-[40px] lg:h-[450px] xl:h-[500px] border-2 py-20 bg-white bg-opacity-80' : 'lg:h-[340px] xl:h-[370px] w-[80%] lg:w-[35%]'} ${index == 0 ? ' border-x-2 border-t-2 rounded-t-[40px] lg:border-x-0 lg:rounded-r-none lg:rounded-l-[40px] lg:border-y-2 lg:border-l-2' : ''} ${index == 2 ? 'border-b-2 border-x-2 rounded-b-[40px] lg:border-x-0 lg:rounded-l-none  lg:rounded-r-[40px] lg:border-y-2 lg:border-r-2' : ''} `} key={index}>
              <p className=' w-full text-center font-extrabold text-16px lg:text-[19px] xl:text-[23px]'>{item.name}</p>
              <div className="flex flex-col justify-center items-start gap-5">
                {item.bullets.map((bullet, index) => (
                  <div key={index} className="flex flex-row justify-start items-start w-full font-[1px] text-[9px] lg:text-[11px] xl:text-[12px]">
                    <Image
                      src={check}
                      width={20}
                      alt='check'
                    />
                    <p>{bullet}</p>
                  </div>
                ))}
              </div>

              <Link target='_blank' href={'https://api.whatsapp.com/send?phone=5493518522977&text=Hola!%20Quiero%20averiguar%20mas%20sobre%20yoga%20empresarial!%20Mi%20nombre%20es:%20'} className={`border border-[#033908] text-[#033908] font-bold rounded-full px-10 py-1 text-[13px] lg:text-[13px] 2xl:text-[16px] ${item.diferencial ? 'bg-[#033908] text-[#f5ebe0] hover:bg-[#f5ebe0] hover:text-[#033908] transition' : 'bg-[#033908] text-[#f5ebe0] hover:bg-[#f5ebe0] hover:text-[#033908] transition'} `}>Contratar</Link>
            </div>

          ))
        }
      </div>

    </div>
  )
}
