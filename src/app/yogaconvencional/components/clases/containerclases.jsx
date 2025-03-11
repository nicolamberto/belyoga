'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { introClases } from '@/app/lib/data/data'

import { motion } from 'framer-motion'

export default function ContainerIntroClases({ name, text1, text2, text3, text4 }) {
    return (
        <div className='flex justify-center items-center w-[100%]'>

            <div className='flex flex-col justify-center items-center w-[34%] sm:w-[35%] md:w-[40%] lg:w-[60%]'>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-[25px] xl:text-[35px] text-[#033908] font-bold pb-6'>
                    {name}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className=" flex flex-col gap-6 text-[#033908] text-opacity-80 text-justify font-[1px] text-[11px] lg:text-[13px] xl:text-[15px]">
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                    <p>{text4}</p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className='flex flex-row justify-between items-center pt-5 md:pt-10 lg:pt-20 pb-5 w-[100%] sm:w-[80%] text-[#033908] text-opacity-80 text-justify font-[1px] text-[11px] lg:text-[13px] xl:text-[15px]'>

                    <div className="">
                        <p className=' font-bold underline pb-2 under'>CLASES PRESENCIALES</p>
                        <ul className='flex flex-col gap-2 list-disc px-7'>
                            <li>Lunes</li>
                            <li>Miercoles</li>
                            <li>Viernes</li>
                        </ul>
                    </div>

                    <div className="">
                        <p className=' font-bold underline pb-2 under'>CLASES VIRTUALES</p>
                        <ul className='flex flex-col gap-2 list-disc px-7'>
                            <li>Lunes</li>
                            <li>Miercoles</li>
                            <li>Viernes</li>
                        </ul>
                    </div>

                    <div className="">
                        <p className=' font-bold underline pb-2 under'>CLASES MIXTAS</p>
                        <ul className='flex flex-col gap-2 list-disc px-7'>
                            <li>Lunes</li>
                            <li>Miercoles</li>
                            <li>Viernes</li>
                        </ul>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, scale: [1, 1.1, 1] }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    viewport={{ once: true }}

                    className="flex justify-center items-center flex-row font-[1px] text-[11px] lg:text-[13px] xl:text-[15px]">
                    <Link href={'/yogaconvencional'} className='px-6 py-2 rounded-full bg-[#033908] text-[#f5ebe0]'>Reserva Tu Clase Ya!</Link>
                </motion.div>

            </div>

        </div>
    )
}
