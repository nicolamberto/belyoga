import React from 'react'

import divisor from '@/app/lib/divisorfino.png'
import Image from 'next/image'


export default function CallToAction() {
    return (
        <div className=' w-full flex flex-col justify-center items-center relative py-40'>
            {/* <Image
                src={divisor}
                className='absolute'
            /> */}
            <div className=" text-center text-[#033908] z-50 pt-56">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, velit? Cumque, quod!</p>
                <button className='border border-[#033908] rounded-full px-6 py-2 mt-5 cursor-pointer hover:bg-[#033908] hover:text-[#f5ebe0] transition '>Ver Clases y Horarios</button>
            </div>
        </div>
    )
}
