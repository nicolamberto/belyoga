"use client"

import React, { useState, useEffect, useCallback } from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import Fade from 'embla-carousel-fade'

import { motion } from 'framer-motion'

import { yogaholisticasub } from '@/app/lib/data/data.jsx'

import '../css/embla.css'

import ContainerIntroPropuestas from '../containerpropuestas'

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
        <div className="w-full pt-10 md:pt-20 2xl:pb-0">

            <div className="embla flex justify-center items-center flex-col pt-0 w-[100%] xl:w-[80%]">



                <div className="embla__viewport " ref={emblaMainRef}>

                    <div className="embla__container w-full ">
                        {yogaholisticasub.map((item, index) => (

                            <div key={index} className="embla__slide" >

                                <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>

                                    <div className="embla-thumbs__container flex flex-col lg:flex-row justify-center gap-0 lg:gap-1 items-center pb-5 sm:pb-10">
                                        {yogaholisticasub.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ y: -5, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.1,
                                                    ease: "easeInOut",
                                                    delay: 0.1
                                                }}
                                                viewport={{ once: true }}
                                            >
                                                <Thumb
                                                    key={item.id}
                                                    onClick={() => onThumbClick(index)}
                                                    selected={index === selectedIndex}
                                                    index={index}
                                                    name={item.name}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>

                                </div>

                                <ContainerIntroPropuestas name={item.name} subtitle={item.subtitle} text1={item.descripcion} text2={item.descripcion2} />

                            </div>
                        ))}

                    </div>

                </div>



            </div>

        </div>


    )
}

export default EmblaCarouselPropuestas
