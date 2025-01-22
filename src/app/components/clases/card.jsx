"use client"

import React, { useState } from 'react'

import { animate, delay, motion } from 'framer-motion'


export default function Card({ id, title, description, img, description2, onClick, isExpanded }) {

    //const [isExpanded, setIsExpanded] = useState(false)


    const animate = {
        layout: 'position',
        animate: { opacity: 1 },
        transition: { delay: 0.3 },
        initial: { opacity: 0 }
    }


    return (





        <motion.div
            className='w-[100%] z-50 flex justify-center items-center flex-col p-[2rem] rounded-[0.2rem] bg-[#79956c] bg-opacity-20'
            layout
            id={id}
            onClick={() => {
                onClick(id)
            }}

        >
            <motion.h5
                layout='position'
                className='text-xl font-semibold mb-[1rem]'>{title}
            </motion.h5>
            <motion.p
                layout='position'
                className='text-sm mb-[1rem] text-gray-600 '>{description}
            </motion.p>
            {!isExpanded && (
                <motion.div
                className='flex justify-end items-center gap-5 w-[100%]'>
                <button className='rounded-[0.3rem] cursor-pointer border-none bg-[#033908] text-[#f5ebe0] py-[0.5rem] px-[2rem]'>Ver mas</button>
            </motion.div>
            )}
            

            {isExpanded && (
                <div className='w-[100%]'>
                    <motion.div
                        {...animate}
                        layout='position'
                        className="w-[100%] h-[200px] bg-gray-300 mb-[1rem] rounded-[0.5rem]">
                    </motion.div>

                    <motion.p
                        {...animate}
                        className='text-sm mb-[1rem] '>{description2}</motion.p>

                    <motion.div

                        className='flex justify-end items-center gap-5 w-[100%]'>
                        <button className='rounded-[0.3rem] cursor-pointer border-none bg-[#033908] text-[#f5ebe0] py-[0.5rem] px-[2rem]'>Cerrar</button>
                    </motion.div>
                </div>
            )}


        </motion.div>






    )
}
