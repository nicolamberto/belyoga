"use client"

import React from 'react'
import { IoMdQuote } from "react-icons/io";
import { reviews } from "@/app/lib/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Review() {
    return (

        <div className="w-[80%] lg:w-[100%] flex justify-center items-center">
            <div className='max-w-[400px] sm:max-w-[567px] md:max-w-[823px] 2xl:max-w-[1200px] w-[100%] py-10 flex'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1380: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='w-[100%] flex justify-center items-center'
                >

                    {reviews.map((item, index) => (
                        <SwiperSlide key={index} className=''>
                            <div className=" w-[100%] h-full flex justify-center items-start">
                                <div className='flex flex-col justify-center items-start w-[70%] p-5 border-2 border-[#033908] rounded-[50px]'>
                                    <div className=" text-xl pb-2 text-green-800">
                                        <IoMdQuote />
                                    </div>
                                    <p className='text-[11px] xl:text-[13px] text-gray-700'>
                                        {item.review}
                                    </p>
                                    <p className='text-md text-gray-800 font-semibold pt-2'>
                                        {item.name}
                                    </p>
                                </div>
                            </div>


                        </SwiperSlide>


                    ))}



                </Swiper>
            </div>
        </div>
    )
}
