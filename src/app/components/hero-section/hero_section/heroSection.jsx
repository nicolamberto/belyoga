import React from 'react'


import banner1 from '@/app/lib/bannerbel1.png'

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import { EmblaCarousel } from '../carousel';

import { socialMediaHero } from '@/app/lib/data/data';
import { EmblaCarouselMobile } from '../carouselmobile';



export default function HeroSection() {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='flex justify-center items-center overflow-hidden md:hidden object-fill m-2 rounded-[20px]'>
                <EmblaCarouselMobile />
            </div>
            <div className='hidden md:flex justify-center items-center overflow-hidden m-2 relative rounded-[20px]'>
                <EmblaCarousel />
            </div>
        </div>
    )
}




