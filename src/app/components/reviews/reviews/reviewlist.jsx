import React from 'react'
import Review from '../review'
import logo from '@/app/lib/logo.png'
import Image from 'next/image'

export default function ReviewList() {
    return (
        <div className='flex justify-center flex-col items-center pt-10 pb-20 sm:py-20 xl:py-32 '>
            <div className="flex flex-col items-center justify-center pb-10">
                <Image
                    src={logo}
                    width={80}
                />
                <p className='text-[25px] xl:text-[35px] pb-0 sm:pb-5 text-[#033908] font-bold text-center'>¿Que opinan nuestros ALUMNOS?</p>
            </div>
            <Review />
        </div>
    )
}
