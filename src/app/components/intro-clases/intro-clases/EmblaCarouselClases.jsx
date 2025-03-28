"use client"

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import Fade from 'embla-carousel-fade'
import '../css/embla.css'

import { tanpearl } from '@/app/layout'

import { introClases } from '@/app/lib/data/data'
import ContainerIntroClases from '../containerintroclases'

import { motion } from 'framer-motion'


const EmblaCarouselIntroClases = () => {

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
        <div className="w-full py-10 md:py-20">

            <div className="embla flex justify-center items-center flex-col w-[100%] xl:w-[80%]">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center pb-5 xl:pb-10">
                    <p className={`text-[25px] xl:text-[35px] pb-0 text-[#033908] font-bold ${tanpearl.className}`}>Nuestras Clases</p>
                </motion.div>

                <div className="embla__viewport " ref={emblaMainRef}>

                    <div className="embla__container w-full ">

                        {introClases.map((item, index) => (
                            <div key={index} className="embla__slide" >

                                <div className="embla-thumbs__viewport flex justify-center items-center" ref={emblaThumbsRef}>

                                    <div className="embla-thumbs__container flex flex-col sm:flex-row justify-center gap-0 sm:gap-10 items-center pb-5 sm:pb-10">
                                        {introClases.map((item, index) => (
                                            
                                                <Thumb
                                                    key={index}
                                                    onClick={() => onThumbClick(index)}
                                                    selected={index === selectedIndex}
                                                    index={index}
                                                    name={item.name}
                                                />

                                        ))}
                                    </div>

                                </div>

                                <ContainerIntroClases name={item.name} img={item.img} text1={item.text1} text2={item.text2} />

                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </div>


    )
}

export default EmblaCarouselIntroClases
