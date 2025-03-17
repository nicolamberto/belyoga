"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import { carouselHeroSectionDesktop, carouselHeroSectionMobile } from '@/app/lib/data/data'
import { socialMediaHero } from '@/app/lib/data/data';



export function EmblaCarouselMobile() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 2000 })
    ])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">


                {carouselHeroSectionMobile.map(item => (
                    <div key={item.name} className="embla__slide items-center justify-center relative flex w-[100%]">
                        <Image
                            src={item.img}
                            quality={true}
                            alt={item.name}
                            className=' w-full'


                        />
                    </div>
                ))}


            </div>
        </div>
    )
}
