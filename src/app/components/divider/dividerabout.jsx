import React from 'react'
import dividerabout from '@/app/lib/divisores/desktop/divisordesktop2.png'
import Image from 'next/image'


export default function DividerAbout() {
    return (
        <div className=" border-2 border-black w-full overflow-hidden">
            <Image
                src={dividerabout}
                alt='divider'
                
            />
        </div>

    )
}
