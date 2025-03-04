import React from 'react'

import sobremi from '@/app/lib/aboutmebel.png'
import trayectoria from '@/app/lib/trayectoria.png'

import { GrYoga } from "react-icons/gr";
import { PiFlowerTulipDuotone, PiClockCounterClockwiseFill } from "react-icons/pi";
import { FaRegCalendarCheck } from "react-icons/fa";

import { aboutSquares } from '@/app/lib/data/data';

import Image from 'next/image'

export default function About() {
  return (
    <div id='about' className=' flex flex-col justify-center items-center'>


      {/* <p className='text-5xl text-gray-800'>SOBRE MI</p> */}
      <div className='flex flex-row justify-center items-center rounded-br-[120px] z-30 bg-opacity-25  w-[80%] pt-32'>

        <div className=' w-[100%] z-30 overflow-visible flex justify-center items-center'>
          <Image
            src={sobremi}
            width={500}
            alt='sobremi'
            className='rounded-tl-[140px] rounded-br-[140px]'
          />

        </div>

        <div className='flex flex-col gap-5'>
          <p className=' text-[50px] text-gray-800'>Sobre MI</p>

          <div className=' flex flex-col ml-2'>

            <h2 className='text-xl text-gray-800'>Belén Sánchez</h2>

            <div className='flex flex-col justify-center items-center gap-5 text-[15px] text-[#4a5e42] pt-5'>

              <p>Soy Bel Sanchez, y mi viaje en el mundo del yoga comenzó hace más de 20 años, cuando aún trabajaba en un exigente cargo administrativo en una importante empresa. En aquel entonces, mis días iniciaban con la práctica de yoga antes de sumergirme en largas jornadas laborales. Esa práctica me ofrecía claridad, enfoque y energía, convirtiéndose en un refugio de bienestar en medio de la rutina.
              </p>
              <p>La vida, como suele hacerlo, me presentó un desafío inesperado: atravesé una enfermedad que marcó un antes y un después en mi camino. Este momento de introspección me llevó a replantear mis prioridades, profundizar en mi autoconocimiento y, finalmente, enamorarme del yoga como filosofía de vida.
              </p>
              <p>Desde entonces, el yoga ha sido mi gran maestro, mi pasión y mi guía. Me dedico no solo a practicarlo, sino también a estudiarlo en todas sus formas y métodos, descubriendo en él una fuente inagotable de unión, comunión y transformación. Para mí, el yoga es un puente entre el cuerpo, la mente y el alma, un camino hacia el autoconocimiento y la plenitud.</p>

            </div>
          </div>

          <div className=' grid grid-cols-4 justify-items-center gap-5 w-full pt-10'>
            {aboutSquares.map(item => (
              <div className='w-56 h-44 bg-[#79956c] bg-opacity-25 transition shadow-md rounded-3xl flex flex-col justify-center items-center gap-0 relative'>

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


      <div className='flex flex-row-reverse justify-center items-center rounded-br-[120px] z-30 bg-opacity-25  w-[80%] py-20'>

        <div className=' w-[100%] z-30 overflow-visible flex justify-center items-center'>
          <Image
            src={trayectoria}
            width={500}
            alt='sobremi'
            className='rounded-tl-[140px] rounded-br-[140px]'
          />

        </div>

        <div className='flex flex-col gap-5'>
          <p className=' text-4xl text-gray-800'>TRAYECTORIA</p>

          <div className=' flex flex-col ml-2'>


            <div className='flex flex-col justify-center items-center gap-7 text-base text-[#4a5e42] pt-5'>

              <p>A lo largo de los años, he profundizado mi aprendizaje con reconocidos maestros y escuelas internacionales, adquiriendo herramientas valiosas para compartir esta disciplina con otras personas:</p>
              <ul className=' flex flex-col gap-4 list-disc pl-10'>
                <li>Especialización en Yogaterapia y Ayurveda.</li>
                <li>Talleres y coaching a cargo de la Escuela de Yoga Clásico y Científico Arturo García.</li>
                <li>Profesorado Superior en Yoga HARI OM, certificado por:
                  <ul className='pl-14 flex flex-col gap-3 py-3 text-sm list-disc'>
                    <li>Yoga Alliance International (India).</li>
                    <li>World Yoga Federation (WYF).</li>
                    <li>Auspiciado por AIPYA (Asociación Internacional de Profesionales de Yoga y Ayurveda) y la Asociación Colombiana de Yoga.</li>
                    <li>Miembro del World Movement for Yoga and Ayurveda y MOAYA (Movimiento Argentino de Yoga y Ayurveda).</li>
                  </ul>
                </li>
                <li>Especialización en Yoga Prenatal.</li>
                <li>Especialización en Yoga para niños y adolescentes.</li>
              </ul>
              <p>Mi misión es transmitir los innumerables beneficios del yoga desde un enfoque integral, adaptado a las necesidades de cada persona. Mi mayor satisfacción es acompañar a otros en su camino hacia el bienestar, ayudándoles a descubrir su propio potencial y alcanzar una vida más consciente y plena.</p>
              <p>Hoy, más que nunca, estoy comprometida con la idea de que el yoga puede transformar vidas, tal como lo hizo con la mía. Mi propósito es crear espacios de conexión y crecimiento, donde cada persona pueda encontrar su equilibrio y despertar su verdadera esencia.
                Te invito a ser parte de este camino y a descubrir juntos el poder del yoga como herramienta de bienestar y transformación.
              </p>

            </div>
          </div>

          <div className=' grid grid-cols-4 justify-items-center gap-5 w-full pt-10'>
            {/* {aboutSquares.map(item => (
              <div className='w-56 h-44 bg-[#79956c] bg-opacity-25 transition shadow-md rounded-3xl flex flex-col justify-center items-center gap-0 relative'>

                <Image
                  src={item.icon}
                  width={60}
                  alt='img'
                  className='text-[#033908] absolute -top-7'
                />
                <p className='w-[80%] text-center'>la mejor yoga pa asegurada</p>
              </div>
            ))} */}
          </div>
        </div>

      </div>




    </div>


  )
}
