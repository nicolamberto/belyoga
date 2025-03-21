"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import { carouselHeroSectionDesktop, carouselHeroSectionMobile } from '@/app/lib/data/data'
import { socialMediaHero } from '@/app/lib/data/data';
import Link from 'next/link'
import { tanpearl } from '@/app/layout'



export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 2000 })
    ])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">

                {carouselHeroSectionDesktop.map((item, index) => (
                    <div key={index} className="embla__slide items-center justify-center relative hidden md:flex w-[100%] ">
                        <Image
                            src={item.img}
                            quality={true}
                            alt={item.name}

                            className='object-fill overflow-hidden rounded-[20px]'

                        />
                        {item.button && (
                            <Link href={'/yogaconvencional'} className={`absolute md:left-[20%] md:px-10 py-1 text-[15px] lg:left-[20%] xl:left-[17%] 2xl:left-[17%] bottom-[37%] lg:px-14 lg:py-1 xl:px-20 xl:py-2 2xl:px-28 2xl:py-3 lg:text-[17px] 2xl:text-[25px] border border-[#033908] bg-[#033908] tracking-[2px] text-[#f5ebe0] text-center rounded-full cursor-pointer hover:bg-[#f5ebe0] hover:text-[#033908] transition font-bold ${tanpearl.className} `}>CLASES</Link>

                        )}

                    </div>
                ))}
            </div>
        </div>
    )
}
