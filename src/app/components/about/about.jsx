'use client'

import React from 'react'

import sobremi from '@/app/lib/aboutmebel.png'
import trayectoria from '@/app/lib/trayectoria.png'

import Image from 'next/image'

import { motion } from 'framer-motion';
import { tanpearl } from '@/app/layout';
import DividerAbout from '../divider/dividerabout';
import divisor1 from '@/app/lib/divisores/desktop/divisorweb.jpg'
import divisormobile from '@/app/lib/divisores/mobile/divisormobile1.png'
import DividerMobile from '../divider/dividermobile'

const MotionImage = motion(Image)

export default function About() {
  return (
    <div id='about' className=' flex flex-col justify-center items-center pt-10 md:pt-20'>


      {/* <p className='text-5xl text-gray-800'>SOBRE MI</p> */}
      <div className='flex flex-col justify-center items-center z-30 bg-opacity-25  w-[100%] xl:w-[70%] px-7 xl:px-0'>

        {/*         <div className='hidden sm:flex z-30 overflow-visible justify-center items-center'>
          <MotionImage
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            src={sobremi}
            width={500}
            alt='sobremi'
            className='rounded-tl-[140px] rounded-br-[140px]'
          />

        </div> */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-[30px] lg:text-[40px] xl:text-[50px] text-[#033908] font-bold pb-5 ${tanpearl.className}`}>
          Sobre Mí
        </motion.p>
        <div className='flex flex-col-reverse sm:flex-row items-center sm:items-center gap-5 w-[100%] md:w-[90%] lg:w-[80%]'>

          <div className='flex z-10 overflow-visible justify-center items-center w-[80%] sm:w-full'>
            <MotionImage
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              src={sobremi}
              width={500}
              alt='sobremi'
            />

          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className=' flex flex-col justify-center items-center sm:items-start sm:ml-2 w-[100%]'>

            <h2 className={`sm:text-[15px] lg:text-[20px] xl:text-[20px] text-[#033908]`}>Belén Sánchez</h2>

            <div
              className=' h-[100%] w-full flex flex-col justify-center items-center gap-6 text-[#033908] text-opacity-80 text-justify font-[1px] text-[11px] lg:text-[13px] xl:text-[15px] pt-5'>
              <p>Hace más de 20 años, mientras trabajaba en un exigente cargo administrativo, descubrí en el yoga un refugio de claridad y bienestar. Sin embargo, una enfermedad marcó un punto de inflexión en mi vida, llevándome a replantear mis prioridades y abrazar el yoga como una verdadera filosofía de vida.
              </p>
              <p>Desde entonces, se ha convertido en mi mayor maestro y pasión. No solo lo practico, sino que lo estudio en profundidad, encontrando en él un camino de transformación, unión y plenitud entre el cuerpo, la mente y el alma.
              </p>
            </div>
          </motion.div>


        </div>

      </div>
      <div className='w-full'>
        <DividerAbout img={divisor1} text={'Encuentra tu paz con el Yoga'} text2={'Conectate con tu cuerpo y mente.'} py={'py-28'} button={'CLASES'} />
        <DividerMobile img={divisormobile} text={'"Enseñar no es un arte mecánico, sino un arte del corazón."'} autor={' B.K.S. Iyengar'} py={'py-10'} button={'CLASES'} />
      </div>

      <div className='flex flex-row-reverse justify-center items-start rounded-br-[120px] z-30 bg-opacity-25  w-[100%] xl:w-[60%] px-7 xl:px-0'>

        <div className='hidden lg:flex z-30 overflow-visible justify-center items-center'>
          <MotionImage
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            src={trayectoria}
            width={500}
            alt='sobremi'
            className='rounded-tl-[140px] rounded-br-[140px] pt-20'
          />

        </div>

        <div className='flex flex-col items-center gap-5 w-[100%] md:w-[90%] lg:w-[100%] pb-20'>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-[30px] lg:text-[40px] xl:text-[50px] text-[#033908] font-bold ${tanpearl.className}`}>Trayectoria</motion.p>

          <div className=' flex flex-col ml-2'>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className='h-[100%] flex flex-col justify-center gap-6 text-[#033908] text-opacity-80 text-justify font-[1px] text-[11px] lg:text-[13px] xl:text-[15px] pt-5'>

              <p>A lo largo de los años, me he formado con reconocidos maestros y escuelas internacionales, adquiriendo herramientas valiosas para compartir el yoga de manera integral y personalizada.</p>
              <ul className=' flex flex-col gap-4 list-disc pl-5 lg:pl-10 font-[1px] text-[11px] lg:text-[13px] xl:text-[15px]'>
                <li>Especialización en Yogaterapia y Ayurveda.</li>
                <li>Talleres y coaching a cargo de la Escuela de Yoga Clásico y Científico Arturo García.</li>
                <li>Profesorado Superior en Yoga HARI OM, certificado por:
                  <ul className=' pl-7 lg:pl-14 flex flex-col gap-3 py-3 list-disc font-[1px] text-[11px] lg:text-[13px] xl:text-[15px]'>
                    <li>Yoga Alliance International (India).</li>
                    <li>World Yoga Federation (WYF).</li>
                    <li>Auspiciado por AIPYA (Asociación Internacional de Profesionales de Yoga y Ayurveda) y la Asociación Colombiana de Yoga.</li>
                    <li>Miembro del World Movement for Yoga and Ayurveda y MOAYA (Movimiento Argentino de Yoga y Ayurveda).</li>
                  </ul>
                </li>
                <li>Especialización en Yoga Prenatal.</li>
                <li>Especialización en Yoga para niños y adolescentes.</li>
              </ul>
              <p>Mi propósito es transmitir los beneficios del yoga y acompañar a cada persona en su camino hacia el bienestar, ayudándole a descubrir su potencial y vivir con mayor conciencia. Te invito a ser parte de esta transformación.</p>
              {/*               <p>Hoy, más que nunca, estoy comprometida con la idea de que el yoga puede transformar vidas, tal como lo hizo con la mía. Mi propósito es crear espacios de conexión y crecimiento, donde cada persona pueda encontrar su equilibrio y despertar su verdadera esencia.
                Te invito a ser parte de este camino y a descubrir juntos el poder del yoga como herramienta de bienestar y transformación.
              </p> */}

            </motion.div>
          </div>
        </div>

      </div>




    </div>


  )
}
