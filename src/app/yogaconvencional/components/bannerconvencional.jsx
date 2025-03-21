import Image from 'next/image'
import React from 'react'

import bannermobile from '@/app/lib/banners/mobile/bannerconvencionalmobile.png'
import bannerdesktop from '@/app/lib/banners/desktop/bannerconvencionaldesktop.png'


export default function BannerConvencional() {
    return (
        <div>
            <Image
                src={bannermobile}
                className='block sm:hidden p-2 rounded-[20px]'
                alt='bannermobile'
            />
            <Image
                src={bannerdesktop}
                className='hidden sm:block p-2 rounded-[20px]'
                alt='bannerdesktop'
            />
        </div>
    )
}
