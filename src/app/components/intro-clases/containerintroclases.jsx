'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { introClases } from '@/app/lib/data/data'

import { motion } from 'framer-motion'

const MotionImage = motion(Image)

export default function ContainerIntroClases({ name, img, text1, text2 }) {
    return (
        <div className="flex justify-center items-center w-[100%] ">

            <div className='flex flex-row justify-center items-center h-full w-[100%] sm:w-[60%] md:w-[50%] lg:w-[70%] 2xl:w-[70%] '>

                <motion.div

                    className=" flex flex-col justify-center gap-5 items-center md:items-start w-[80%] sm:w-[70%] md:w-[70%] xl:w-[70%] text-justify  ">
                    <p className='font-semibold text-start text-[16px]'>{name}</p>

                    <div className="flex flex-col gap-5 text-[#033908] text-opacity-80 font-[1px] text-[11px] lg:text-[13px] xl:text-[15px]">
                        <p>{text1}</p>
                        <p>{text2}</p>

                        <div className="flex justify-end pr-10 items-center flex-row">
                            <Link href={'/yogaconvencional'} className='px-6 py-2 rounded-full bg-[#033908] text-[#f5ebe0] hover:text-[#033908] hover:font-extrabold hover:bg-transparent border-[#79956c] hover:bg-opacity-60 transition'>Leer más</Link>
                        </div>

                    </div>

                </motion.div>

                <div className="hidden md:block md:w-[25%] lg:w-[25%] xl:w-[30%]">
                    <MotionImage

                        src={img}
                        alt='img'
                        width={400}
                    />
                </div>

            </div>

        </div>

    )
}
