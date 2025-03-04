'use client'

import React, { useEffect, useState } from 'react'
import logo from '@/app/lib/logosoloclaro.png'
import Image from 'next/image'
import { navbar } from '@/app/lib/data/data'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {

    const [color, setColor] = useState(true)
    const [hover, setHover] = useState(null)
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    const MotionLink = motion(Link)

    const changeColor = () => {
        if (typeof window !== 'undefined' && window.scrollY > 800) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', changeColor)
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', changeColor)
            }
        }
    }, [])


    return (
        <div className=' w-full flex justify-center items-center sticky top-0 z-50 bg-[#033908] transition bg-opacity-90 duration-300' >
            <div className=' w-[90%] h-12 flex items-center justify-between relative'>
                <Image
                    src={logo}
                    width={60}
                    alt='image'
                />
                <div className='hidden md:flex justify-between'>
                    <ul className='flex items-center gap-8 xl:gap-16 justify-center text-[#f5ebe0] cursor-pointer font-semibold'>

                        {navbar.map(item => (
                            <MotionLink
                                key={item.title}
                                href={item.link}
                                className='hover:text-[#033908] transition text-[7px] lg:text-[10px] relative'

                            >
                                {item.title}
                            </MotionLink>
                        ))}
                    </ul>

                </div>
                <button className='bg-[#f5ebe0] px-4 py-[2px] rounded-full border border-green-900 text-sm text-[#033908] hover:text-[#f5ebe0] hover:bg-[#033908] transition hidden md:block'>Contactame!</button>
                <button onClick={() => setIsMobileNavOpen((old) => !old)} className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 space-y-1 flex flex-col justify-center items-center h-5 w-5 z-30">
                    <motion.span
                        animate={{
                            rotate: isMobileNavOpen ? 45 : 0,
                            y: isMobileNavOpen ? 6 : 0,
                        }}
                        className="min-w-3 h-px bg-white block"
                    />
                    <motion.span
                        animate={{
                            opacity: isMobileNavOpen ? 0 : 1,
                            x: isMobileNavOpen ? 5 : 0,
                        }}
                        className="min-w-3 h-px bg-white block"
                    />
                    <motion.span
                        animate={{
                            rotate: isMobileNavOpen ? -45 : 0,
                            y: isMobileNavOpen ? -4 : 0,
                        }}
                        className="min-w-3 h-px bg-white block"
                    />
                </button>
                <AnimatePresence>
                    {isMobileNavOpen && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { delay: 0.2 } }}
                            className="fixed inset-0 z-10 bg-black/20 backdrop-blur-md flex flex-col justify-center space-y-5 items-center"
                        >
                            {navbar.map((item, index) => (
                                <MotionLink
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                        delay: 0.05 * index,
                                    }}
                                    key={item.title}
                                    href={item.link}
                                    className='text-[#033908] font-semibold'
                                    onClick={() => setIsMobileNavOpen(false)}
                                >
                                    {item.title}
                                </MotionLink>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>

    )
}
