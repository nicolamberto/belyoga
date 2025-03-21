import React from 'react'
import { endSectionHolistica } from '@/app/lib/data/data'


export default function EndSection() {
  return (
    <div className='w-[80%] xl:w-[50%] flex flex-col justify-center items-center gap-36'>
      {endSectionHolistica.map((item, index) => (

        <ul className=' w-full text-[#033908] text-opacity-80 text-justify font-[1px] text-[11px] lg:text-[13px] xl:text-[15px] flex flex-col gap-10 '>
          <li  className='font-extrabold text-[17px] lg:text-[20px] xl:text-[25px] text-center'>{item.name}</li>
          <div className="flex flex-col gap-10">
            {item.prods.map((item, index) => (
              <ul className=" pl-10">
                <li className='font-extrabold text-13px lg:text-[15px] xl:text-[17px] list-disc'>{item.name}</li>
                <p>{item.descripcion}</p>
              </ul>

            ))}
          </div>
        </ul>
      ))}
    </div>


  )
}
