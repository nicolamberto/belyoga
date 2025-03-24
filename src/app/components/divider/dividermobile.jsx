import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function DividerMobile({ img, text, text2, autor, py, button }) {
    return (
        <div className={`relative sm:hidden block w-full overflow-hidden ${py}`}>
            <Image
                src={img}
                alt='divider'
                className='w-full'
            />
            <div className='w-full font-[1px] text-[12px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#f5ebe0] flex flex-col justify-center items-center gap-3'>
                <div className="flex flex-col">
                    <p>{text}</p>
                    <p>{text2}</p>
                </div>

                {button && (
                    <Link href={'/yogaconvencional'}><button className='rounded-full border border-white px-4 py-1 hover:bg-[#033908] transition'>{button}</button></Link>

                )}
            </div>
        </div>
    )
}
