import React from 'react'

import sobremi from '@/app/lib/aboutmebel.png'

import { GrYoga } from "react-icons/gr";
import { PiFlowerTulipDuotone, PiClockCounterClockwiseFill } from "react-icons/pi";
import { FaRegCalendarCheck } from "react-icons/fa";

import { aboutSquares } from '@/app/lib/data/data';

import Image from 'next/image'

export default function About() {
  return (
    <div id='about' className=' flex justify-center items-center'>


      {/* <p className='text-5xl text-gray-800'>SOBRE MI</p> */}
      <div className='flex flex-row justify-center items-center rounded-br-[120px] pr-4 bg-opacity-25  w-[1320px] py-56'>

        <div className=' w-[100%] z-30 overflow-visible'>
          <Image
            src={sobremi}
            width={500}
            alt='sobremi'
            className='rounded-tl-[140px] rounded-br-[140px]'
          />

        </div>

        <div className='flex flex-col gap-5'>
          <p className=' text-4xl text-gray-800'>SOBRE MI</p>

          <div className=' flex flex-col ml-2'>

            <h2 className='text-xl text-gray-800'>Belén Sánchez</h2>

            <div className='flex flex-col justify-center items-center gap-2 text-base text-[#4a5e42] pt-5'>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam dignissimos nesciunt mollitia illo perferendis facilis consectetur porro ullam, nihil obcaecati quasi dolores adipisci rerum aliquid harum pariatur ea ratione.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam voluptate, porro voluptates eius expedita consectetur, itaque voluptatum placeat eaque recusandae quos impedit libero atque mollitia tenetur accusamus necessitatibus culpa?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam voluptate, porro voluptates eius expedita consectetur, itaque voluptatum placeat eaque recusandae quos impedit libero atque mollitia tenetur accusamus necessitatibus culpa?</p>

            </div>
          </div>

          <div className=' grid grid-cols-4 justify-items-center gap-5 w-full pt-10'>
            {aboutSquares.map(item => (
              <div className='w-36 h-36 bg-[#79956c] bg-opacity-25 transition shadow-md rounded-3xl flex flex-col justify-center items-center gap-3 relative'>

                <Image
                  src={item.icon}
                  width={60}
                  alt='img'
                  className='text-[#033908] absolute -top-7'
                />
                <p className='w-[80%] text-center'>la mejor yoga pa asegurada</p>
              </div>
            ))}
          </div>
        </div>

      </div>




    </div>


  )
}
