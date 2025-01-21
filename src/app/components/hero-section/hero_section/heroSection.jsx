import React from 'react'


import banner1 from '@/app/lib/bannerbel1.png'

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import { EmblaCarousel } from '../carousel';

import { socialMediaHero } from '@/app/lib/data/data';



export default function HeroSection() {
    return (
        <div className='w-full h-[100%] flex justify-center items-center bg-[#f5ebe0] '>
            <div className='flex relative justify-center items-center  h-[100vh]  overflow-hidden'>
                <EmblaCarousel />
                <div className='absolute flex gap-4 text-xl text-[#fff] bottom-[5%] right-[5%]'>
                    {socialMediaHero.map(item => (
                        <button>{item.icon}</button>
                    ))}
                </div>
            </div>


        </div>
    )
}
