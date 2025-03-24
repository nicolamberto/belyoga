'use client'

import React from 'react'
import Link from 'next/link'


export default function ContainerIntroPropuestas({ name, img, text, link }) {
    return (
        <div className='flex justify-center items-center w-[100%]'>

            <div 

            className=" flex flex-col justify-center gap-5 items-center w-[100%] sm:w-[80%] text-justify ">
                <p className='font-semibold text-start text-[16px]'>{name}</p>

                <div className="flex flex-col gap-5 font-[1px] text-[11px] lg:text-[13px] xl:text-[15px] w-[80%] sm:w-[80%] xl:w-[70%] text-[#033908] text-opacity-80 ">
                    <p>{text}</p>

                    <div className="flex justify-end pr-10 items-center flex-row">
                        <Link href={link} className='px-6 py-2 rounded-full bg-[#033908] text-[#f5ebe0] hover:text-[#033908] hover:font-extrabold hover:bg-transparent border-[#79956c] hover:bg-opacity-60 transition'>Leer más</Link>
                    </div>

                </div>

            </div>

        </div>
    )
}
