import Image from 'next/image'
import React from 'react'
import sobremi from '@/app/lib/imgintropropholistica.png'


export default function IntroClases() {
    return (
        <div className='flex flex-row-reverse justify-center items-center rounded-br-[120px] bg-opacity-25  w-[100%] py-20'>

            <div className=' w-[100%] z-10 overflow-visible'>
                <Image
                    src={sobremi}
                    width={500}
                    alt='sobremi'

                />

            </div>

            <div className='flex flex-col gap-5'>
                <p className=' text-4xl text-[#033908]'>PROPUESTAS DE EXPERIENCIAS HOLISTICAS PARA EL TURISMO</p>

                <div className=' flex flex-col'>

                    <h2 className='text-xl text-gray-800'>Belén Sánchez</h2>

                    <div className='flex flex-col justify-center items-center gap-2 text-base text-[#4a5e42] pt-5'>

                        <p>La provincia de Córdoba, con su riqueza natural, cultural y espiritual, se posiciona como un destino ideal para el turismo holístico y de bienestar. Nuestra propuesta busca potenciar estas características únicas, integrando experiencias que conecten a visitantes con los paisajes, la tradición y el cuidado integral del cuerpo y la mente.
                        </p>
                        <p>Diseñamos actividades que combinan prácticas ancestrales, terapias modernas y productos locales, fomentando un turismo sostenible, vivencial y con impacto positivo tanto en los visitantes como en la comunidad local.
                        </p>


                    </div>
                </div>
            </div>

        </div>
    )
}
