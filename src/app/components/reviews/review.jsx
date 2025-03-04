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


        <div className='max-w-[1400px]'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='w-[90%]  flex justify-center items-center'
            >
                
                    {reviews.map((item, index) => (
                        <SwiperSlide key={index} className=''>
                            <div className=" w-full h-full flex justify-center items-center">
                                <div className='flex flex-col justify-center items-start w-[70%] p-5 border-2 border-[#033908] rounded-[50px]'>
                                <div className=" text-xl pb-2 text-green-800">
                                    <IoMdQuote />
                                </div>
                                <p className='text-[13px] text-gray-700'>
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

    )
}
