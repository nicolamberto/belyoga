"use client"

import React, { useState, useEffect, useCallback } from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import Fade from 'embla-carousel-fade'

import { motion } from 'framer-motion'

import { yogaConvencional } from '@/app/lib/data/data'

import ContainerIntroClases from '../containerclases'

import '../css/embla.css'

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
        <div className="w-full py-10 pt-20 md:pb-20 md:pt-32 2xl:pb-10">

            <div className="embla flex justify-center items-center flex-col pt-0 w-[100%] xl:w-[80%]">



                <div className="embla__viewport " ref={emblaMainRef}>

                    <div className="embla__container w-full ">
                        {yogaConvencional.map((item, index) => (

                            <div className="embla__slide" >

                                <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>

                                    <div className="embla-thumbs__container flex flex-col sm:flex-row justify-center gap-0 sm:gap-10 items-center pb-5 sm:pb-10">
                                        {yogaConvencional.map((item, index) => (
                                            <motion.div
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

                                <ContainerIntroClases name={item.name} img={item.img} text1={item.text1} text2={item.text2} text3={item.text3} text4={item.text4} />

                            </div>
                        ))}

                    </div>

                </div>



            </div>

        </div>


    )
}

export default EmblaCarouselClases
