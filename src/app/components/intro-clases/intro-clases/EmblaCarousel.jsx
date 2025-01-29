"use client"

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import Fade from 'embla-carousel-fade'
import '../css/embla.css'


import { introClases } from '@/app/lib/data/data'
import ContainerIntroClases from '../containerintroclases'

const EmblaCarousel = () => {

    const options = {
        align: 'center',
        containScroll: false
    }


    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [Fade()])
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    })

    const onThumbClick = useCallback(
        (index) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()

        emblaMainApi.on('select', onSelect).on('reInit', onSelect)
    }, [emblaMainApi, onSelect])

    return (
        <div className="bg-[#f5ebe0] bg-opacity-60 w-full">
            <div className="embla flex justify-center items-center flex-col py-40 w-[80%]">
                <p className='text-4xl text-[#033908] mb-10'>NUESTRAS CLASES</p>
                <div className="flex justify-center items-center flex-col gap-5 w-[80%]">
                    <div className="embla__viewport " ref={emblaMainRef}>
                        <div className="embla__container w-full ">
                            {introClases.map((item, index) => (
                                <div className="embla__slide pb-10" >
                                    <ContainerIntroClases name={item.name} img={item.img} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="embla-thumbs">
                        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                            <div className="embla-thumbs__container flex flex-row justify-center gap-10 items-center pb-10">
                                {introClases.map((item, index) => (
                                    <Thumb
                                        key={item.id}
                                        onClick={() => onThumbClick(index)}
                                        selected={index === selectedIndex}
                                        index={index}
                                        name={item.name}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default EmblaCarousel
