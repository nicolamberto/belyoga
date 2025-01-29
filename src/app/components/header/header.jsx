'use client'

import React, { useEffect, useState } from 'react'
import logo from '@/app/lib/logosoloclaro.png'
import Image from 'next/image'
import { navbar } from '@/app/lib/data/data'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Header() {

    const [color, setColor] = useState(true)




    const changeColor = () => {
        if (typeof window !== 'undefined' && window.scrollY > 800) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', changeColor)
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', changeColor)
            }
        }
    }, [])


    return (
        <div className={/* color ? */ 'w-full flex justify-center items-center fixed top-0 z-50 bg-[#79956c] transition bg-opacity-90 duration-300' /* : 'w-full flex justify-center items-center fixed top-0 z-50 transition duration-300' */}>
            <div className=' w-[90%] h-20 flex items-center justify-between'>
                <Image
                    src={logo}
                    width={100}
                    alt='image'
                />
                <div className='flex justify-between'>
                    <ul className='flex items-center gap-14 justify-center text-xs px-20 text-[#f5ebe0] cursor-pointer font-semibold'>

                        {navbar.map(item => (
                            <Link key={item.title} href={item.link} className='hover:text-[#033908] transition'>{item.title}</Link>
                        ))}
                    </ul>
                    <button className='bg-[#f5ebe0] px-4 py-[2px] rounded-full border border-green-900 text-sm text-[#033908] hover:scale-105 hover:text-[#f5ebe0] hover:bg-[#033908] transition'>351-264-2805</button>
                </div>

            </div>
        </div>

    )
}
