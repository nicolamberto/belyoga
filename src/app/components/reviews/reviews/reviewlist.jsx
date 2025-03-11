'use client'

import React from 'react'
import Review from '../review'
import logo from '@/app/lib/logo.png'
import Image from 'next/image'

import { motion } from 'framer-motion'
const MotionImage = motion(Image)

export default function ReviewList() {
    return (
        <div className='flex justify-center flex-col items-center pt-10 pb-20 sm:py-20 xl:py-32 '>
            <div className="flex flex-col items-center justify-center pb-10">
                <MotionImage
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    src={logo}
                    width={80}
                    alt='logo'
                />
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className='text-[25px] xl:text-[35px] pb-0 sm:pb-5 text-[#033908] font-bold text-center'>
                    ¿Que opinan nuestros ALUMNOS?
                </motion.p>
            </div>
            <Review />
        </div>
    )
}
