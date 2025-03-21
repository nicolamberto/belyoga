import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function DividerAbout({ img, text, text2, autor, py }) {
    return (
        <div className={`relative hidden sm:block w-full overflow-hidden ${py}`}>
            <Image
                src={img}
                alt='divider'
            />
            <div className='font-[1px] text-[11px] lg:text-[13px] xl:text-[15px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#f5ebe0] flex flex-col justify-center items-center gap-3'>
                <div className="flex flex-col">
                    <p>{text}</p>
                    <p>{text2}</p>
                </div>

                <Link href={'/yogaconvencional'}><button className='rounded-full border border-white px-4 py-1 hover:bg-[#033908] transition'>CLASES</button></Link>
            </div>
        </div>
    )
}
