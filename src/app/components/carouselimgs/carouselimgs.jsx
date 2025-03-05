"use client"

import React from 'react'
import { IoMdQuote } from "react-icons/io";
import { carouselImgs } from "@/app/lib/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';

export default function CarouselImgs() {
    return (

        <div className="w-full flex justify-center items-center">
            <div className='2xl:max-w-[1736px] w-[100%] py-10 flex'>
                <Swiper
                    // install Swiper modules
                    modules={[Scrollbar, A11y, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 1000
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        1380: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className=' w-[100%]'
                >
                    <div>
                        {carouselImgs.map((item) => (
                            <SwiperSlide key={item.alt} className=''>
                                <div className="rounded-xl object-cover flex justify-center items-center">
                                    <Image
                                        src={item.img}
                                        width={600}
                                        className='object-cover overflow-hidden rounded-[10px] h-[300px]'
                                    />
                                </div>


                            </SwiperSlide>


                        ))}
                    </div>


                </Swiper>
            </div>
        </div>


    )
}
