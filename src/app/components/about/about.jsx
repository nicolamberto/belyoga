import React from 'react'

import about from '@/app/lib/about.png'
import Image from 'next/image'

export default function About() {
  return (
    <div className='w-[100%]'>
        <Image
        src={about}
        className='pt-40'
        />
    </div>
  )
}
