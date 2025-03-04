"use client"

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import Fade from 'embla-carousel-fade'
import '../css/embla.css'



import { introClases } from '@/app/lib/data/data'
import ContainerIntroClases from '../containerintroclases'




const EmblaCarouselClases = () => {

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
        <div className="w-full py-10 md:py-20 2xl:pb-32 2xl:pt-40">

            <div className="embla flex justify-center items-center flex-col w-[100%] xl:w-[80%]">

                <div className="flex flex-col items-center justify-center">
                    <p className='text-[30px] lg:text-[40px] xl:text-[50px] text-[#033908] pb-0'>Nuestras CLASES</p>
                </div>

                <div className="embla__viewport " ref={emblaMainRef}>

                    <div className="embla__container w-full ">

                        {introClases.map((item, index) => (
                            <div className="embla__slide" >

                                <div className="embla-thumbs__viewport flex justify-center items-center" ref={emblaThumbsRef}>

                                    <div className="embla-thumbs__container flex flex-col sm:flex-row justify-center gap-0 sm:gap-10 items-center py-5">
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

                                <ContainerIntroClases name={item.name} img={item.img} />

                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </div>


    )
}

export default EmblaCarouselClases
