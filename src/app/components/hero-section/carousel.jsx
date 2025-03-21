"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import { carouselHeroSectionDesktop, carouselHeroSectionMobile } from '@/app/lib/data/data'
import { socialMediaHero } from '@/app/lib/data/data';



export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 5000 })
    ])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">

                {carouselHeroSectionDesktop.map(item => (
                    <div key={item.name} className="embla__slide items-center justify-center relative hidden md:flex w-[100%]">
                        <Image
                            src={item.img}
                            quality={true}
                            alt={item.name}

                            className='object-fill overflow-hidden rounded-[20px]'

                        />
                 
                    </div>
                ))}
            </div>
        </div>
    )
}
