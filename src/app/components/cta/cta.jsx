import React from 'react'

import divisor from '@/app/lib/divisorfino.png'
import Image from 'next/image'


export default function CallToAction() {
    return (
        <div className=' w-full flex flex-col justify-center items-center relative md:py-12 lg:py-40'>
             <Image
                src={divisor}
                className='absolute pb-40'
                alt='divisor'
            /> 
            <div className="text-[11px] sm:text-[13px] lg:text-[15px] xl:text-[17px] text-center text-[#033908] z-50">
                <p>Encuentra tu paz con el yoga.</p>
                <p>Conéctate con tu cuerpo y mente.</p>
                <p>Descubre clases para relajarte y sentirte mejor.</p>
                <button className='border border-[#033908] rounded-full px-6 py-2 mt-5 cursor-pointer hover:bg-[#033908] hover:text-[#f5ebe0] transition '>Ver Clases y Horarios</button>
            </div>
        </div>
    )
}
