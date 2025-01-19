import React from 'react'


import banner1 from '@/app/lib/bannerbel1.png'

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';




export default function HeroSection() {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center bg-[#f5ebe0] pt-10'>
            <div className='flex relative justify-center items-center w-[100%]'>
                <Image
                    src={banner1}
                    alt='banner'
                    className=' shadow-lg'
                    

                />
                 <div className='absolute flex gap-4 text-xl text-[#fff] bottom-[5%] right-[5%] '>
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaTwitter />
            </div>
            </div>

           
        </div>
    )
}
