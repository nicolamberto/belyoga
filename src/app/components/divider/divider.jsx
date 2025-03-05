"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import Autoplay from 'embla-carousel-autoplay'

import { dividerItems } from '@/app/lib/data/data'

export default function Divider() {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 1500 })
    ])

    return (
        <>
            <div className="w-full justify-center items-center hidden sm:flex">
                <div className='w-[100%] grid grid-cols-7 justify-items-center bg-[#79956c] font-[1px] text-[9px] lg:text-[11px] xl:text-[13px] px-20'>

                    <div className='flex flex-col justify-center items-center py-5'>
                        <div className='flex flex-col justify-center items-center text-[#f5ebe0]'>
                            <p>+300</p>
                            <p>Alumnos</p>
                        </div>
                    </div>

                    <div className='dark:bg-opacity-20 bg-[#f5ebe0] h-full w-1 rounded-full hidden sm:block'></div>

                    <div className='flex flex-col justify-center items-center py-5'>
                        <div className='flex flex-col justify-center items-center text-[#f5ebe0]'>
                            <p>+10</p>
                            <p>Años de experiencia</p>
                        </div>
                    </div>

                    <div className='dark:bg-opacity-20 bg-[#f5ebe0] h-full w-1 rounded-full hidden sm:block'></div>

                    <div className='flex flex-col justify-center items-center py-5'>
                        <div className='flex flex-col justify-center items-center text-[#f5ebe0]'>
                            <p>+300</p>
                            <p>Alumnos</p>
                        </div>
                    </div>

                    <div className='dark:bg-opacity-20 bg-[#f5ebe0] h-full w-1 rounded-full hidden sm:block'></div>

                    <div className='flex flex-col justify-center items-center py-5'>
                        <div className='flex flex-col justify-center items-center text-[#f5ebe0]'>
                            <p>+300</p>
                            <p>Alumnos</p>
                        </div>
                    </div>


                </div>
            </div>


            <div className="embla w-full" ref={emblaRef}>
                <div className="embla__container">

                    {dividerItems.map(item => (

                        <div className='embla__slide w-[100%] justify-items-center bg-[#79956c] text-[10px] lg:text-xs px-20 block sm:hidden'>

                            <div className='flex flex-col justify-center items-center py-5'>
                                <div className='flex flex-col justify-center items-center text-[#f5ebe0]'>
                                    <p>{item.text}</p>
                                    <p>{item.text2}</p>
                                </div>
                            </div>


                        </div>

                    ))}

                </div>
            </div>
        </>





    )
}
