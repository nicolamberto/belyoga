import React from 'react'

import divisor from '@/app/lib/divisorfino.png'
import Image from 'next/image'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <div className=' w-full flex flex-col justify-center items-center relative py-12 lg:py-40'>
            <Image
                src={divisor}
                className='absolute pb-40'
                alt='divisor'
            />
            <div className="flex flex-col justify-center items-center gap-5 text-[11px] sm:text-[13px] lg:text-[15px] xl:text-[17px] text-center text-[#033908] z-50">
                <div className="">
                    <p>Encuentra tu paz con el yoga.</p>
                    <p>Conéctate con tu cuerpo y mente.</p>
                    <p>Descubre clases para relajarte y sentirte mejor.</p>
                </div>

                <Link href={'/yogaconvencional'} className='border border-[#033908] rounded-full px-6 py-2 cursor-pointer hover:bg-[#033908] hover:text-[#f5ebe0] transition '>Ver Clases y Horarios</Link>
            </div>
        </div>
    )
}
