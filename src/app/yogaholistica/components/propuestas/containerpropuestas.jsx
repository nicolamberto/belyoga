'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { tanpearl } from '@/app/layout'

export default function ContainerIntroPropuestas({ name, text1, text2, subtitle}) {
    return (
        <div className='flex justify-center items-center w-[100%]'>

            <div className='flex flex-col justify-center items-center w-[30%] sm:w-[40%] md:w-[60%] lg:w-[30%] gap-5'>
            <div className="pb-10 md:pb-0">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-[25px] xl:text-[35px] pb-0 text-[#033908] font-bold text-center ${tanpearl.className}`}
                >
                    {name}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className='text-[12px] text-center sm:text-end'>
                    {subtitle}
                </motion.p>
            </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className=" flex flex-col gap-6 text-[#033908] text-opacity-80 text-justify font-[1px] text-[11px] lg:text-[13px] xl:text-[15px] md:py-10">
                    <p>{text1}</p>
                    <p>{text2}</p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, scale: [1, 1.1, 1] }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    viewport={{ once: true }}

                    className="flex justify-center items-center flex-row font-[1px] text-[11px] lg:text-[13px] xl:text-[15px]">
                    <Link target='_blank' href={'https://api.whatsapp.com/send?phone=5493518522977&text=Hola!%20Quiero%20averiguar%20mas%20sobre%20yoga!%20Mi%20nombre%20es:%20'} className='px-6 py-2 rounded-full bg-[#033908] text-[#f5ebe0] hover:text-[#033908] hover:font-extrabold hover:bg-transparent border-[#79956c] hover:bg-opacity-60 transition'>Quiero Saber Mas!</Link>
                </motion.div>

            </div>

        </div>
    )
}
