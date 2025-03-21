import React from 'react'

import footerizq from '@/app/lib/footerizq.png'
import Image from 'next/image'
import { navbar } from '@/app/lib/data/data'
import Link from 'next/link'
import banner3hero from '@/app/lib/banners/desktop/bannerfinal1.jpg'

import footerbg from '@/app/lib/footer/footerbg.png'
import footerlogo from '@/app/lib/footer/footerlogo.png'

export default function Footer() {
    return (
        <div className="relative flex flex-col justify-center items-center py-10 text-[#f5ebe0]">
            <div className="absolute inset-0 bg-[#033908] bg-opacity-90 z-20"></div>
            <Image
                src={footerbg}
                className='absolute bg-opacity-50 z-10 object-fit h-full object-cover top-0 w-full'
                alt='footerbg'
            />
            <Image
            src={footerlogo}
            className='absolute z-30 object-fit object-cover bottom-0 opacity-5 w-full '
            alt='footerlogo'
            />
            <div className='flex flex-col justify-around items-center w-[80%] xl:w-[50%] h-[300px] z-30'>

                <div className="flex flex-row justify-between items-center w-full">

                    <ul className='flex flex-col justify-center items-center  text-[10px] sm:text-[12px] w-full gap-4'>
                        {navbar.map((item, index) => (
                            <Link key={index} href={item.link} className='hover:text-[#033908] transition text-opacity-85'>{item.title}</Link>
                        ))}
                    </ul>

                </div>

            </div>
            <div className="text-[7px] sm:text-[10px] w-full text-center pt-5  z-20">
                <p>diseñado por Martina Daniele. Desarrollado por Nicolas Lamberto.</p>
                <p>construido con React & Next.js (App Router & Server Actions), Tailwind CSS, Framer Motion, Resend, Vercel hosting.</p>
            </div>
        </div>

    )
}
