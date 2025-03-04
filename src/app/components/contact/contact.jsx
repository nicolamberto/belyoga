import React from 'react'

import mapa from '@/app/lib/mapa.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
    return (
        <div className='w-full flex justify-center items-start pb-20 h-full'>
            <div className="w-[60%] flex flex-row justify-center items-center">

                <div className=' w-[30%]'>
                    <Image
                        src={mapa}
                    />
                </div>
                <div className=' flex flex-col justify-between h-full'>
                    <div className="">
                        <p className='text-[#033908] text-[25px] py-5'>Contacto</p>
                        <p className='text-[#033908] text-[18px]'>Dirección: <span className='text-[15px] px-10'>Calle Aconcagua 2520 Barrio Parque</span></p>
                        <p className='text-[#033908] text-[18px]'>Teléfono: <span className='text-[15px] px-10'>123456789</span> </p>
                        <p className='text-[#033908] text-[18px]'>Correo: <span className='text-[15px] px-10'>belyoga@gmail.com</span></p>
                    </div>


                    <div className="flex flex-row gap-10 pt-20 ">
                  
                        <Link href={'#'} className='px-6 py-2 rounded-full bg-[#033908] text-[#f5ebe0]'><button>Google Maps</button></Link>
                        <Link href={'#'} className='px-6 py-2 rounded-full bg-[#033908] text-[#f5ebe0]'><button> Contacta ya</button></Link>
                    </div>
                </div>


            </div>
        </div>
    )
}
