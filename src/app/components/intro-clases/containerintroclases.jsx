import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContainerIntroClases({ name, img }) {
    return (
        <div className='flex flex-row justify-between items-center h-full p-10 border gap-10 border-gray-300 shadow-md rounded-[30px] '>
            <div className=" flex flex-col justify-center gap-2 items-center h-full">
                <p className='text-lg font-semibold'>{name}</p>
                <div className="flex flex-col gap-5 text-sm text-gray-700 ">
                    <p>Sumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. En nuestras clases presenciales, disfrutarás de la conexión directa con el instructor y otros practicantes, mientras profundizas en la respiraciónSumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. En nuestras clases presenciales, disfrutarás de la conexión directa con el instructor y otros practicantes, mientras profundizas en la respiraciónSumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. En nuestras clases presenciales, disfrutarás de la conexión directa con el instructor y otros practicantes, mientras profundizas en la respiración</p>
                    <p>En nuestras clases presenciales, disfrutarás de la conexión directa con el instructor y otros practicantes, mientras profundizas en la respiraciónSumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. En nuestras clases presenciales, disfrutarás de la conexión directa con el instructor y otros practicantes, mientras profundizas en la respiraciónSumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. En nuestras clases presenciales</p>


                    <div className="flex justify-around items-center flex-row">

                        <div className="flex flex-row gap-5">
                            <div className='flex flex-col '>
                                <p>Horarios semanales.</p>
                                <p>10:00 am to 20:00 pm</p>
                                <p>10:00 am to 20:00 pm</p>
                            </div>
                            <div className='flex flex-col '>
                                <p>Horarios semanales.</p>
                                <p>10:00 am to 20:00 pm</p>
                                <p>10:00 am to 20:00 pm</p>
                            </div>
                        </div>

                        <Link href={'/yogaconvencional'} className='px-6 py-2 rounded-full bg-[#033908] text-[#f5ebe0]'>Leer mas</Link>
                    </div>





                </div>
            </div>
            <div className=" flex justify-center rounded-[30px] overflow-hidden">
                <Image
                    src={img}
                    alt='img'
                />
            </div>


        </div>
    )
}
