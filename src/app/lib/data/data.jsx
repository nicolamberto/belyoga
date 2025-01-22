
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
        name: 'alt1',
        img: banner1hero
    },
    {
        name: 'alt2',
        img: banner2hero
    },
    {
        name: 'alt3',
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



export const clases = [
    {
        nombre: 'YOGA Y NATURALEZA: RECONEXION EN ESCENARIOS AUTENTICOS',
        descripcion: 'Sesiones de yoga al aire libre en lugares emblemáticos de Córdoba como el Valle de Calamuchita, las Sierras Chicas o el Parque Nacional Quebrada del Condorito',
        img:'',
        descripcion2:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.',
        id:1
    },
    {
        nombre: 'CEREMONIAS DE CACAO: TRADICION Y SANACION EN CORDOBA',
        descripcion: 'Ceremonias inspiradas en la cosmovisión indígena que integran el cacao ceremonial con música, danza y conexión grupal. Se utilizará cacao orgánico producido de manera ética, complementado con hierbas locales como peperina y palo santo',
        img:'',
        descripcion2:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.',
        id:2
    },
    {
        nombre: 'EXPERIENCIAS SENSORIALES DE BIENESTAR',
        descripcion: 'Circuitos holísticos que combinan actividades como yoga, mindfulness y tratamientos de spa con productos locales.',
        img:'',
        descripcion2:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.',
        id:3
    }
]