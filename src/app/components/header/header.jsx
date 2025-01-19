import React from 'react'
import logo from '@/app/lib/logosoloclaro.png'
import Image from 'next/image'




export default function Header() {
    return (
        <div className='w-full flex justify-center items-center fixed top-0 z-10'>
            <div className=' w-[90%] h-16 flex items-center justify-between  '>
                <Image
                    src={logo}
                    width={100}
                    alt='image'
                />
                <div className='flex justify-between'>
                    <ul className='flex items-center gap-14 justify-center text-xs px-20 text-[#f5ebe0] cursor-pointer font-semibold'>
                        <li className='hover:text-[#033908] transition'>HOME</li>
                        <li className='hover:text-[#033908] transition'>SOBRE MI</li>
                        <li className='hover:text-[#033908] transition'>CLASES</li>
                        <li className='hover:text-[#033908] transition'>CONTACTO</li>
                    </ul>
                    <button className='bg-[#f5ebe0] px-4 py-[2px] rounded-full border border-green-900 text-sm text-[#033908] hover:scale-105 hover:text-[#f5ebe0] hover:bg-[#033908] transition'>351-264-2805</button>
                </div>

            </div>
        </div>

    )
}
