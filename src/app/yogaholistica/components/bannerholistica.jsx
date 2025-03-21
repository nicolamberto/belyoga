import Image from 'next/image'
import React from 'react'

import bannermobile from '@/app/lib/banners/mobile/bannerholisticamobile.jpg'
import bannerdesktop from '@/app/lib/banners/mobile/bannerholisticadesktop.jpg'
export default function BannerHolistica() {
    return (
        <div>
            <Image
                src={bannermobile}
                className='block sm:hidden p-2 rounded-[20px]'
            />
            <Image
                src={bannerdesktop}
                className='hidden sm:block p-2 rounded-[20px]'
            />

        </div>
    )
}
