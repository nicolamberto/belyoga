'use client'

import React, { useEffect, useState } from 'react'
import logo from '@/app/lib/logosoloclaro.png'
import Image from 'next/image'
import { navbar, socialMediaHero } from '@/app/lib/data/data'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {


    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    const MotionLink = motion(Link)

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.05 }}
            className=' w-full flex justify-center items-center sticky top-0 z-50 bg-[#033908] transition bg-opacity-90 duration-300' >
            <div className=' w-[90%] h-[43px] flex items-center justify-between relative'>
                <Link href={'/'}>
                    <Image
                        src={logo}
                        width={60}
                        alt='image'
                    />
                </Link>

                <div className='hidden md:flex justify-between'>
                    <ul className='flex items-center gap-8 xl:gap-16 justify-center text-[#f5ebe0] cursor-pointer font-semibold'>

                        {navbar.map((item, index) => (
                            <MotionLink

                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.1,
                                    ease: "easeInOut",
                                    delay: 0.3
                                }}
                                key={item.title}
                                href={item.link}
                                className=' text-[7px] lg:text-[10px] relative'

                            >

                                <motion.p
                                    initial={{ opacity: 0.9 }}
                                    whileHover={{ scale: 1.1, opacity: 1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {item.title}
                                </motion.p>

                            </MotionLink>
                        ))}
                    </ul>

                </div>
                <div className='hidden md:flex flex-row justify-center items-center gap-3 lg:gap-6 text-[#f5ebe0]  text-[15px] lg:text-[20px]'>
                    {socialMediaHero.map((item, index) => (
                        <motion.button
                            initial={{ opacity: 0.9 }}
                            whileHover={{ scale: 1.1, opacity: 1 }}
                            whileTap={{ scale: 0.9 }}
                            key={index}>
                            {item.icon}
                        </motion.button>
                    ))}
                </div>

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
                            className="fixed inset-0 z-10 bg-[#033908]/80 backdrop-blur-md flex flex-col justify-center space-y-5 items-center"
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
                                    className='text-[#f5ebe0] font-semibold'
                                    onClick={() => setIsMobileNavOpen(false)}
                                >
                                    {item.title}
                                </MotionLink>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>

    )
}
