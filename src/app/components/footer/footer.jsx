import React from 'react'

import footerizq from '@/app/lib/footerizq.png'
import Image from 'next/image'
import { navbar } from '@/app/lib/data/data'
import Link from 'next/link'


export default function Footer() {
    return (
        <div className="flex flex-col justify-center items-center  bg-[#033908] py-10 text-[#f5ebe0]">
            <div className='flex flex-col justify-around items-center w-[50%] h-full '>
                <div className=" pb-5 text-base">
                    <p>BELEN YOGA</p>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <Image
                        src={footerizq}
                        alt='img'
                        width={100}
                    />
                    <ul className='flex flex-col'>
                        {navbar.map(item => (
                            <Link key={item.title} href={item.link} className='hover:text-[#033908] transition text-xs'>{item.title}</Link>
                        ))}
                    </ul>
                    <Image
                        src={footerizq}
                        alt='img'
                        width={100}
                    />
                </div>
                
            </div>
            <div className="text-xs bg-[#033908] w-full text-center pt-5">
                    <p>diseñado por Martina Daniele. Desarrollado por Nicolas Lamberto.</p>
                    <p>construido con React & Next.js (App Router & Server Actions), Tailwind CSS, Framer Motion, Resend, Vercel hosting.</p>
                </div>
        </div>

    )
}
