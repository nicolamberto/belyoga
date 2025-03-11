"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import { carouselHeroSection } from '@/app/lib/data/data'
import { socialMediaHero } from '@/app/lib/data/data';



export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 2000 })
    ])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">

                {carouselHeroSection.map(item => (
                    <div key={item.name} className="embla__slide items-center justify-center relative hidden md:flex">
                        <Image
                            src={item.img}
                            quality={true}
                            alt={item.name}
                            className='object-cover overflow-hidden'
                        />
                        <div className='absolute flex gap-4 text-xl text-[#fff] bottom-[5%] right-[5%]'>
                            {socialMediaHero.map((item, index) => (
                                <button key={index}>{item.icon}</button>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
