import React from 'react'


import banner1 from '@/app/lib/bannerbel1.png'

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import { EmblaCarousel } from '../carousel';

import { socialMediaHero } from '@/app/lib/data/data';



export default function HeroSection() {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='flex justify-center items-center overflow-hidden'>
                <EmblaCarousel />
            </div>


        </div>
    )
}
