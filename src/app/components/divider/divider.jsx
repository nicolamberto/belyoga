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
            <div className="w-full justify-between items-center hidden sm:flex bg-[#033908]">
                <div className='sm:w-[100%] md:w-[65%] xl:w-[50%] md:h-24 lg:h-44 grid grid-cols-5 justify-items-center items-center font-[1px] text-[9px] lg:text-[11px] xl:text-[13px] px-20'>

                    <div className='flex flex-col justify-center items-center py-5'>
                        <div className='flex flex-col justify-center items-center text-[#f5ebe0]'>
                            <p className='sm:text-[20px] lg:text-[25px] 2xl:text-[30px] font-bold'>+300</p>
                            <p className=' text-[7px] 2xl:text-base '>Alumnos</p>
                        </div>
                    </div>

                    <hr className='dark:bg-opacity-20 bg-[#f5ebe0] sm:h-[50%] md:h-[20%] lg:h-[40%] w-[1px] rounded-full hidden sm:flex justify-center' />

                    <div className='flex flex-col justify-center items-center py-5'>
                        <div className='flex flex-col justify-center items-center text-[#f5ebe0] text-nowrap'>
                            <p className='sm:text-[20px] lg:text-[25px] 2xl:text-[30px] font-bold'>+10</p>
                            <p className=' text-[7px] 2xl:text-base '>Años de experiencia</p>
                        </div>
                    </div>

                    <hr className='dark:bg-opacity-20 bg-[#f5ebe0] sm:h-[50%] md:h-[20%] lg:h-[40%] w-[1px] rounded-full hidden sm:flex justify-center' />

                    <div className='flex flex-col justify-center items-center py-5'>
                        <div className='flex flex-col justify-center items-center text-[#f5ebe0]'>
                            <p className='sm:text-[20px] lg:text-[25px] 2xl:text-[30px] font-bold'>+300</p>
                            <p className=' text-[7px] 2xl:text-base '>Alumnos</p>
                        </div>
                    </div>

                </div>

                <div className='hidden md:w-[35%] xl:w-[50%] h-full text-[5px] lg:text-[7px] xl:text-[11px] md:flex justify-center items-center text-[#f5ebe0] text-opacity-70 '>
                    <div className=" md:w-[90%] xl:w-[80%] 2xl:w-[60%] flex flex-col justify-center items-start gap-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iste architecto, ullam illo veritatis fugiat expedita ipsum ratione delectus aut.</p>
                        <button className='text-green-400'>Join Member</button>
                    </div>

                </div>
            </div>


            <div className="embla w-full" ref={emblaRef}>
                <div className="embla__container">

                    {dividerItems.map(item => (

                        <div className='embla__slide w-[100%] h-24 flex justify-center items-center bg-[#033908] text-[10px] lg:text-xs px-20 sm:hidden'>

                            <div className='flex flex-col justify-center items-center py-5'>
                                <div className='flex flex-col justify-center items-center text-[#f5ebe0]'>
                                    <p className='text-[25px] font-bold'>{item.text}</p>
                                    <p className='text-[10px] font-light'>{item.text2}</p>
                                </div>
                            </div>


                        </div>

                    ))}

                </div>
            </div>
        </>





    )
}
