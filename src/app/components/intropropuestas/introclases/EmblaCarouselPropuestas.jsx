"use client"

import React, { useState, useEffect, useCallback } from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import Fade from 'embla-carousel-fade'

import { tanpearl } from '@/app/layout'

import { introPropuestas } from '@/app/lib/data/data'

import ContainerIntroPropuestas from '../containerintropropuestas'

import { motion } from 'framer-motion'

import '../css/embla.css'

const EmblaCarouselPropuestas = () => {

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
        <div className="w-full py-10 md:pb-20 md:pt-10 ">

            <div className="embla flex justify-center items-center flex-col pt-0 w-[100%] xl:w-[80%]">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center pb-5 xl:pb-10">
                    <p className={`text-[25px] xl:text-[35px] pb-0 text-[#033908] font-bold ${tanpearl.className}`}>Otras PROPUESTAS</p>
                </motion.div>

                <div className="embla__viewport " ref={emblaMainRef}>

                    <div className="embla__container w-full ">
                        {introPropuestas.map((item, index) => (

                            <div key={index} className="embla__slide" >

                                <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>

                                    <div className="embla-thumbs__container flex flex-col sm:flex-row justify-center gap-0 sm:gap-10 items-center pb-5 sm:pb-10">
                                        {introPropuestas.map((item, index) => (

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

                                <ContainerIntroPropuestas name={item.name} img={item.img} text={item.text1} link={item.link} />

                            </div>
                        ))}

                    </div>

                </div>



            </div>

        </div>


    )
}

export default EmblaCarouselPropuestas
