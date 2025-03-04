import React from 'react'
import Review from '../review'
import logo from '@/app/lib/logo.png'
import Image from 'next/image'

export default function ReviewList() {
    return (
        <div className='flex justify-center flex-col items-center py-40 '>
            <div className="flex flex-col items-center justify-center pb-10">
                <Image
                    src={logo}
                    width={80}
                />
                <p className='text-[50px] text-[#033908]'>¿Que opinan nuestros ALUMNOS?</p>
            </div>
            <Review />
        </div>
    )
}
