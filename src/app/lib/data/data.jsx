
export const navbar = [
    {
        title: 'INICIO',
        link: '#home'
    },
    {
        title: 'SOBRE MI',
        link: '#about'
    },
    {
        title: 'TRAYECTORIA',
        link: '#'
    },
    {
        title: 'CLASES',
        link: '#'
    },    
    {
        title: 'CONTACTO',
        link: '#'
    }
]

import banner1hero from '@/app/lib/bannerbel3.png'
import banner2hero from '@/app/lib/bannerbel2.png'
import banner3hero from '@/app/lib/bannerbel1.png'

export const carouselHeroSection = [
    {
        name: 'alt',
        img: banner1hero
    },
    {
        name: 'alt',
        img: banner2hero
    },
    {
        name: 'alt',
        img: banner3hero
    },
]

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export const socialMediaHero = [
    {
        name:'instagram',
        icon: <FaInstagram/>
    },
    {
        name:'facebook',
        icon: <FaFacebook/>
    },
    {
        name:'linkedin',
        icon: <FaLinkedin/>
    },
    {
        name:'twitter',
        icon: <FaTwitter/>
    },
]


import { GrYoga } from "react-icons/gr";
import { PiFlowerTulipDuotone, PiClockCounterClockwiseFill } from "react-icons/pi";
import { FaRegCalendarCheck } from "react-icons/fa";

import logo1 from '@/app/lib/logouno.png'
import logo2 from '@/app/lib/logodos.png'
import logo3 from '@/app/lib/logotres.png'
import logo4 from '@/app/lib/logocuatro.png'

export const aboutSquares = [
    {
        icon: logo1,
        text: 'yoga equilibrio balance'
    },
    {
        icon: logo2,
        text: 'yoga equilibrio balance'
    },
    {
        icon: logo3,
        text: 'yoga equilibrio balance'
    },
    {
        icon: logo4,
        text: 'yoga equilibrio balance'
    },
]
