import React from 'react'

import mapa from '@/app/lib/mapa.png'
import divisor from '@/app/lib/divisorfino.png'

import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
    return (
        <div className='w-full flex justify-center items-start pb-20 h-full md:pt-36 relative'>
            <Image
                src={divisor}
                className='absolute -top-16 sm:-top-20 md:top-0 lg:-top-4 xl:-top-16'
                alt='divisor'
            />
            <div className="w-[60%] flex flex-col-reverse lg:flex-row justify-center items-center gap-10">

                <div className='block sm:w-[50%] lg:w-[30%]'>
                    <Image
                        src={mapa}
                        className='rounded-[20px]'
                    />
                </div>
                <div className='flex flex-col justify-between h-full'>
                    <div className="">
                        <p className='text-[#033908] text-[20px] lg:text-[25px] py-5 font-extrabold underline text-center lg:text-start'>Contacto</p>
                        <p className='text-[#033908] font-bold text-[11px] sm:text-[13px] lg:text-[15px] xl:text-[18px] '>Dirección: <span className='px-10 font-light text-[9px] sm:text-[11px] lg:text-[13px] xl:text-[15px]'>Calle Aconcagua 2520 Barrio Parque</span></p>
                        <p className='text-[#033908] font-bold text-[11px] sm:text-[13px] lg:text-[15px] xl:text-[18px]'>Teléfono: <span className='px-10 font-light text-[9px] sm:text-[11px] lg:text-[13px] xl:text-[15px]'>123456789</span> </p>
                        <p className='text-[#033908] font-bold text-[11px] sm:text-[13px] lg:text-[15px] xl:text-[18px]'>Correo: <span className='px-10 font-light text-[9px] sm:text-[11px] lg:text-[13px] xl:text-[15px]'>belyoga@gmail.com</span></p>
                    </div>


                    <div className="flex flex-row justify-center md:justify-start items-center gap-10 pt-5 lg:pt-10 xl:pt-20 text-[11px] lg:text-[13px] xl:text-[15px]">

                        <Link target='_blank' href={'https://maps.app.goo.gl/d44EyZ7tMzFrC5v2A'} className='px-6 py-2 rounded-full bg-[#033908] text-[#f5ebe0] hover:text-[#033908] hover:font-extrabold hover:bg-transparent border-[#79956c] hover:bg-opacity-60 transition'><button>Espacio Samadhi</button></Link>
                        <Link target='_blank' href={'https://api.whatsapp.com/send?phone=5493518522977&text=Hola!%20Quiero%20averiguar%20mas%20sobre%20yoga!%20Mi%20nombre%20es:%20'} className='px-6 py-2 rounded-full bg-[#033908] text-[#f5ebe0] hover:text-[#033908] hover:font-extrabold hover:bg-transparent border-[#79956c] hover:bg-opacity-60 transition'><button> Contacta ya</button></Link>
                    </div>
                </div>


            </div>
        </div>
    )
}
