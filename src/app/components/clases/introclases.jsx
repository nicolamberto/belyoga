import Image from 'next/image'
import React from 'react'


export default function IntroClases({ title, subtitle, text1, text2, img }) {
    return (
        <div className='flex flex-row-reverse justify-center items-center rounded-br-[120px] bg-opacity-25  w-[100%] py-20'>

            <div className=' w-[30%] z-10 overflow-visible'>
                <Image
                    src={img}
                    width={500}
                    alt='sobremi'
                />

            </div>

            <div className='flex flex-col gap-5 z-10 w-[70%]'>
                <p className=' text-4xl text-[#033908]'>{title}</p>

                <div className=' flex flex-col'>

                    <h2 className='text-xl text-gray-800'>{subtitle}</h2>

                    <div className='flex flex-col justify-center items-center gap-7 text-base text-[#4a5e42] pt-5'>

                        <p>
                            {text1}
                        </p>
                        <p>
                            {text2}
                        </p>


                    </div>
                </div>
            </div>

        </div>
    )
}
