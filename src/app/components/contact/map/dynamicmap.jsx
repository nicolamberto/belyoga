'use client'

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./map'), {
    ssr: false // Desactiva la renderización del lado del servidor
});

export default DynamicMap;