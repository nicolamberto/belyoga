"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import banner1 from '@/app/lib/bannerbel3.png'
import banner2 from '@/app/lib/bannerbel2.png'
import banner3 from '@/app/lib/bannerbel1.png'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import { carouselHeroSection } from '@/app/lib/data/data'



export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 2000 })
    ])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container ">

                {carouselHeroSection.map(item => (
                    <div key={item.name} className="embla__slide flex items-center justify-center overflow-hidden">
                        <Image
                            src={item.img}
                            quality={true}
                            alt={item.name}
                        />
                    </div>
                ))}
                
            </div>
        </div>
    )
}
