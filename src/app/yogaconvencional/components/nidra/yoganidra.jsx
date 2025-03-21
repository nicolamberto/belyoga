import React from 'react'
import yoganidraimg from '@/app/lib/yogatradicional.png'
import Image from 'next/image'
import { yogaNidra } from '@/app/lib/data/data'
import logo from '@/app/lib/logo.png'
import CallToAction from '@/app/components/cta/cta'


import { motion } from 'framer-motion'
import { tanpearl } from '@/app/layout'
const MotionImage = motion(Image)

export default function YogaNidra() {
    return (
        <div className="flex flex-col justify-center items-center gap-0 pt-10 pb-36">
            <div className="pb-10 md:pb-0">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-[25px] xl:text-[35px] pb-0 text-[#033908] font-bold text-center ${tanpearl.className}`}
                >
                    {yogaNidra.title}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className='text-[8px] text-center sm:text-end'>
                    {yogaNidra.subtitle}
                </motion.p>
            </div>

            <div className="flex flex-row justify-center items-center md:w-[80%] 2xl:w-[60%] gap-10">
                <div className="w-[50%] hidden md:block">
                    <MotionImage
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        src={yoganidraimg}
                        width={500}
                        alt='yoganidra'
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col gap-5 text-[#033908] text-opacity-80 text-justify font-[1px] text-[11px] lg:text-[13px] xl:text-[15px] w-[80%]">
                    <p>{yogaNidra.introtext}</p>
                    <p className='font-extrabold text-15px lg:text-[17px] xl:text-[20px]'>{yogaNidra.subtitle2}</p>
                    <p>{yogaNidra.text1}</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex flex-col justify-center items-center w-[80%] md:w-[60%] gap-10">

                <div className="text-[#033908] text-opacity-80 text-justify font-[1px] text-[11px] lg:text-[13px] xl:text-[15px] flex flex-col gap-6 pt-10">
                    <p className='font-extrabold text-15px lg:text-[17px] xl:text-[20px]'>{yogaNidra.subtitle3}</p>
                    <p>{yogaNidra.text2}</p>
                </div>

                <div className="w-full">
                    <div className="flex justify-center items-center w-full">
                        <Image
                            src={logo}
                            width={80}
                            alt='logo'
                        />
                    </div>

                </div>

                <div className="text-[#033908] text-opacity-80 text-justify font-[1px] text-[11px] lg:text-[13px] xl:text-[15px] flex flex-col gap-6 justify-center items-center">
                    <p className='font-extrabold text-15px lg:text-[17px] xl:text-[20px]'>{yogaNidra.subtitle4}</p>
                    <p>{yogaNidra.text3}</p>
                    <p>{yogaNidra.text4}</p>
                </div>

            </motion.div>


        </div>
    )
}
