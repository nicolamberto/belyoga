'use client'

import React from 'react'


import introyoga from '@/app/lib/introyoga.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { tanpearl } from '@/app/layout'

const MotionImage = motion(Image)



export default function IntroYoga() {
    return (
        <div className=' flex justify-center flex-col items-center py-10 md:py-20 2xl:py-28 '>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center pb-10 sm:pb-5 2xl:pb-0"
            >
                <p className={`text-[25px] xl:text-[35px] text-[#033908] font-bold ${tanpearl.className}`}>¿Qué es el Yoga?</p>
            </motion.div>

            <div className="flex justify-center items-center gap-5 w-[100%] lg:w-[80%] 2xl:w-[55%] px-7 xl:px-0">

                <div className='hidden sm:block'>
                    <MotionImage
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        src={introyoga}
                        alt='img'
                        width={400}
                        className='rounded-tl-[140px] rounded-br-[140px]'
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className='w-[100%] md:w-[90%] lg:w-[80%] h-[100%] flex flex-col justify-center gap-6 text-[#033908] text-opacity-80 text-justify font-[1px] text-[11px] lg:text-[13px] xl:text-[15px]'
                >
                    <p>
                        En nuestro espacio, entendemos el yoga como una práctica que va más allá del ejercicio físico. Más que flexibilidad y fuerza, buscamos la conexión interna y el equilibrio entre cuerpo, mente y emociones.
                    </p>
                    <p>
                        A menudo, el yoga se asocia con logros externos, pero aquí lo practicamos como un camino hacia la introspección y la autenticidad. Priorizamos la respiración, la presencia y el autoconocimiento.                    </p>
                    <p>
                        Respetamos la esencia del yoga, adaptándolo a las necesidades de hoy. No importa tu edad o experiencia, este espacio está abierto para tod@s. Creemos en el yoga como una herramienta de transformación y bienestar.                    </p>
                </motion.div>

            </div>

        </div>
    )
}
