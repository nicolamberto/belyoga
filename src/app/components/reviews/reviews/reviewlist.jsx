import React from 'react'
import Review from '../review'

export default function ReviewList() {
    return (
        <div className='bg-[#f5ebe0] bg-opacity-60 flex justify-center flex-col items-center py-20 '>
            <p className='text-4xl text-[#033908]'>QUE OPINAN NUESTROS ALUMNOS</p>
            <Review />
        </div>
    )
}
