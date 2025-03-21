import { tanpearl } from '@/app/layout'
import React from 'react'

export default function IntroPropuestas() {
    return (
        <div className='flex flex-col gap-10 pt-10 md:pt-20 2xl:pb-0 w-[80%] xl:w-[50%]'>
            <p className={`text-[25px] xl:text-[35px] pb-0 text-[#033908] font-bold text-center ${tanpearl.className}`}>Propuesta de Experiencias Holísticas para el Turismo</p>
            <div className=" flex flex-col gap-5 text-[#033908] text-opacity-80 text-justify font-[1px] text-[11px] lg:text-[13px] xl:text-[15px]">
                <p>La provincia de Córdoba, con su riqueza natural, cultural y espiritual, se posiciona como un destino ideal para el turismo holístico y de bienestar. Nuestra propuesta busca potenciar estas características únicas, integrando experiencias que conecten a visitantes con los paisajes, la tradición y el cuidado integral del cuerpo y la mente.</p>
                <p>Diseñamos actividades que combinan prácticas ancestrales, terapias modernas y productos locales, fomentando un turismo sostenible, vivencial y con impacto positivo tanto en los visitantes como en la comunidad local.</p>
            </div>
        </div>
    )
}
