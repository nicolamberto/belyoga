'use client'

import React, { useState } from 'react'
import logoempresarial1 from '@/app/lib/logoempresarial1.png'
import { AnimatePresence, motion } from 'framer-motion'
import { actividadesEmpresarial } from '@/app/lib/data/data'
import { tanpearl } from '@/app/layout'
import divisor from '@/app/lib/divisorfino.png'
import Image from 'next/image'

export default function ActividadesEmpresarial() {

  const [hoverIndex, setHoverIndex] = useState(null)
  const MotionImage = motion(Image)

  return (

    <div className=" w-[90%] xl:w-[60%] flex flex-col justify-center items-center p-10 my-20 bg-white bg-opacity-80 rounded-[50px] shadow-xl">
      <p className={`text-[25px] xl:text-[35px] text-[#033908] font-bold text-center ${tanpearl.className} pb-10`}>NUESTRAS ACTIVIDADES</p>
      <motion.div
        className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 w-[100%] justify-items-center'
      >
        {actividadesEmpresarial.map((item, index) => (
          <motion.div
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className="relative group transition flex flex-col justify-center items-center w-[90%] xl:w-[100%] shadow-sm my-7 p-4 rounded-[20px] border border-[#033908] text-[#033908] h-[140px] py-20">
            <motion.p
              initial={{ y: 0 }}
              animate={{ y: hoverIndex === index ? -50 : 0 }}
              transition={{ stiffness: 300, delay: 0, duration: 0.1 }}
              className={`text-[13px] px-4 pt-4 w-[100%] md:w-[100%] font-bold transition h-full text-start flex justify-start items-center absolute`}>
              {item.name}
            </motion.p>
            <AnimatePresence>
              {hoverIndex === index && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className='text-[10px] text-start pt-7'
                >
                  {item.text}
                </motion.p>
              )}
            </AnimatePresence>
            <div className="w-full">
              <button className='border border-[#033908] rounded-full px-3 absolute bottom-2 right-2 text-[20px] font-bold bg-[#033908] text-white group-hover:bg-[#fff] group-hover:text-[#033908] transition'>+</button>
            </div>
            <div className="absolute bg-opacity-20 w-full h-full left-3 top-2">
              <MotionImage
                initial={{ y: 0 }}
                animate={{ y: hoverIndex === index ? -60 : 0 }}
                exit={{ y: 0 }}
                src={item.img}
                width={50}
                alt='logo'
                className=''
              />
            </div>

          </motion.div>
        ))}


      </motion.div>
    </div>

  )
}
