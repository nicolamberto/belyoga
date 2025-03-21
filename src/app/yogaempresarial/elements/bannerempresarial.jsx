import Image from 'next/image'
import React from 'react'

import bannermobile from '@/app/lib/banners/mobile/bannerempresarialmobile.jpg'
import bannerdesktop from '@/app/lib/banners/desktop/bannerempresarialdesktop.jpg'


export default function BannerEmpresarial() {
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
