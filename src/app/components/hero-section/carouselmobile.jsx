"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import { carouselHeroSectionMobile } from '@/app/lib/data/data'

import Link from 'next/link'
import { tanpearl } from '@/app/layout'



export function EmblaCarouselMobile() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 2000 })
    ])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">


                {carouselHeroSectionMobile.map((item, index) => (
                    <div key={index} className="embla__slide items-center justify-center relative flex w-[100%]">
                        <Image
                            src={item.img}
                            quality={true}
                            alt={item.name}
                            className=' w-full rounded-[20px]'


                        />
                        {item.button && (
                            <Link href={'/yogaconvencional'} className={`absolute bottom-16 border border-[#033908] bg-[#f5ebe0] tracking-[2px] text-[#033908] text-center rounded-full px-10 py-2 cursor-pointer hover:bg-[#033908] hover:text-[#f5ebe0] transition font-bold ${tanpearl.className} `}>CLASES</Link>

                        )}
                    </div>
                ))}


            </div>
        </div>
    )
}
