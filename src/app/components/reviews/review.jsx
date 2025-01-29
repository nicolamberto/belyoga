"use client"

import React from 'react'
import { IoMdQuote } from "react-icons/io";
import { reviews } from "@/app/lib/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Review() {
    return (


        <div className='max-w-[1400px]  py-10'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='h-[100vh] w-[90%]'
            >

                {reviews.map((item, index) => (
                    <SwiperSlide key={index} className=''>

                        <div  className='flex flex-col justify-center items-start w-[70%] p-5 bg-white bg-opacity-80 rounded-lg '>
                            <div className=" text-3xl">
                                <IoMdQuote />
                            </div>
                            <p className='text-sm text-gray-700'>
                                {item.review}
                            </p>
                            <p className='text-md text-gray-800 font-semibold'>
                                {item.name}
                            </p>
                        </div>

                    </SwiperSlide>


                ))}

            </Swiper>
        </div>

    )
}
