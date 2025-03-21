"use client"

import React from 'react'

import Image from 'next/image';

import { carouselImgs } from "@/app/lib/data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import 'swiper/css/autoplay';

export default function CarouselImgs() {
    return (

        <div className="w-full flex justify-center items-center">
            <div className='2xl:max-w-[1736px] w-[100%] py-10 flex'>
                <Swiper
                    // install Swiper modules
                    modules={[Scrollbar, A11y, Autoplay, FreeMode]}
                    spaceBetween={0}
                    slidesPerView={5}
                    freeMode={true}
                    loop={true}
                    allowTouchMove={false}
                    autoplay={{
                        delay: 0,
                        
                    }}
                    speed={3000}
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
                                        className='object-cover overflow-hidden rounded-[50px] h-[300px] p-2'
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
