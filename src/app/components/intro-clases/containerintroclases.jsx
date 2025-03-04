import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { introClases } from '@/app/lib/data/data'


export default function ContainerIntroClases({ name, img }) {
    return (
        <div className="flex justify-center items-center w-[100%]">

            <div className='flex flex-row justify-center items-center h-full w-[100%] sm:w-[80%]'>

                <div className=" flex flex-col justify-center gap-5 items-start w-[80%] sm:w-[50%] text-justify">
                    <p className='font-semibold text-start text-[20px] lg:text-[25px]'>{name}</p>

                    <div className="flex flex-col gap-5 text-[#033908] text-opacity-80 text-[11px] lg:text-[13px] xl:text-[15px]">
                        <p>Sumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. En nuestras clases presenciales, disfrutarás de la conexión directa con el instructor y otros practicantes, mientras profundizas en la respiraciónSumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. </p>
                        <p>Sumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. En nuestras clases presenciales, disfrutarás de la conexión directa con el instructor y otros practicantes, mientras profundizas en la respiraciónSumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. </p>

                        <div className="flex justify-end pr-10 items-center flex-row">
                            <Link href={'/yogaconvencional'} className='px-6 py-2 rounded-full bg-[#033908] text-[#f5ebe0]'>Leer mas</Link>
                        </div>

                    </div>

                </div>

                <div className="hidden md:block md:w-[15%] lg:w-[20%] xl:w-[30%]">
                    <Image
                        src={img}
                        alt='img'
                        width={400}
                    />
                </div>

            </div>

        </div>

    )
}
