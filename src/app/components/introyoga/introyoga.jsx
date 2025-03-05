import React from 'react'


import introyoga from '@/app/lib/introyoga.png'
import Image from 'next/image'
import logo from '@/app/lib/logo.png'

import localFont from 'next/font/local';






export default function IntroYoga() {
    return (
        <div className=' flex justify-center flex-col items-center py-10 md:py-20 2xl:py-40 '>

            <div className="flex flex-col items-center justify-center pb-10 sm:pb-5 2xl:pb-0">
                <p className={`text-[25px] xl:text-[35px] text-[#033908] font-bold`}>¿Que es el YOGA?</p>
            </div>

            <div className="flex justify-center items-center gap-5 w-[100%] xl:w-[80%] 2xl:w-[70%] px-5 xl:px-0">

                <div className='hidden sm:block'>
                    <Image
                        src={introyoga}
                        alt='img'
                        width={400}
                        className='rounded-tl-[140px] rounded-br-[140px]'
                    />
                </div>

                <div className='w-[100%] md:w-[90%] lg:w-[80%] h-[100%] flex flex-col justify-center gap-6 text-[#033908] text-opacity-80 text-justify font-[1px] text-[11px] lg:text-[13px] xl:text-[15px]'>
                    <p>
                        En nuestro espacio, concebimos el yoga como una experiencia transformadora que va más allá de las posturas físicas. Su propósito principal es reconectar contigo mismo, recuperar tu esencia y fomentar el equilibrio entre cuerpo, mente y emociones. Las clases están diseñadas para priorizar la respiración, la presencia y la conexión interna, creando un espacio para desconectar del ruido externo y redescubrir tu ser auténtico.
                    </p>
                    <p>
                        El yoga es inclusivo y accesible para todos, independientemente de la edad, experiencia o condición física. Nuestro enfoque integral aborda el cuerpo, la mente y las emociones, integrando la riqueza filosófica y espiritual del yoga. Cada respiración y movimiento representa una oportunidad para reconectar contigo mismo.
                    </p>
                    <p>
                        El yoga es inclusivo y accesible para todos, independientemente de la edad, experiencia o condición física. Nuestro enfoque integral aborda el cuerpo, la mente y las emociones, integrando la riqueza filosófica y espiritual del yoga. Cada respiración y movimiento representa una oportunidad para reconectar contigo mismo.
                    </p>
                </div>

            </div>

        </div>
    )
}
