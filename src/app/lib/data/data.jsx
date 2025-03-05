
export const navbar = [
    {
        title: 'INICIO',
        link: '/'
    },
    {
        title: 'SOBRE MI',
        link: '/sobremi'
    },
    {
        title: 'YOGA CONVENCIONAL',
        link: '/yogaconvencional'
    },
    {
        title: 'YOGA HOLISTICA',
        link: '/yogaholistica'
    },
    {
        title: 'YOGA EMPRESARIAL',
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
        name: 'instagram',
        icon: <FaInstagram />
    },
    {
        name: 'facebook',
        icon: <FaFacebook />
    },
    {
        name: 'linkedin',
        icon: <FaLinkedin />
    },
    {
        name: 'twitter',
        icon: <FaTwitter />
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


export const yogaconvencional = [
    {
        title: '¿ QUE ES EL YOGA ?',
        subtitle: 'SUBTITULO',
        text1: 'En nuestro espacio, entendemos el yoga como una experiencia transformadora que trasciende las posturas físicas. Más allá de los beneficios como flexibilidad, fuerza y bienestar, el yoga busca conectar contigo mism@, recuperar tu esencia y cultivar equilibrio entre cuerpo, mente y emociones. Inspirado en su esencia original y adaptado a los desafíos actuales, nuestras clases priorizan la respiración, la presencia y la conexión interna, ofreciendo un espacio para desconectar del ruido externo y reencontrarte con tu ser auténtico.',
        text2: 'No importa tu edad, experiencia o condición física: el yoga es para tod@s. Con un enfoque integral que incluye cuerpo, mente, emociones y la riqueza filosófica y espiritual del yoga, cada respiración, movimiento y momento es una oportunidad para recordar quién eres y construir una vida más consciente y plena. Te invitamos a explorar nuestros horarios y probar una clase. Será un placer acompañarte en este camino de conexión y transformación.',
        img: imgholistica
    }
]


export const yogaconvencionalsub = [
    {
        nombre: 'CLASES PRESENCIALES',
        descripcion: 'Sumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. En nuestras clases presenciales, disfrutarás de la conexión directa con el instructor y otros practicantes, mientras profundizas en la respiración, el movimiento consciente y el equilibrio interno. Un espacio para desconectar del ruido externo y reconectar contigo mism@.',
        img: '',
        descripcion2: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.',
        id: 1
    },
    {
        nombre: 'CLASES ONLINE',
        descripcion: 'Lleva la esencia del yoga a la comodidad de tu hogar. Nuestras clases online están diseñadas para que disfrutes de una práctica guiada, flexible y accesible desde cualquier lugar. Conéctate con tu interior, cultiva equilibrio y bienestar, y experimenta el yoga de forma auténtica, adaptada a tus necesidades.',
        img: '',
        descripcion2: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.',
        id: 2
    },
    {
        nombre: 'CLASES COMBINADAS',
        descripcion: 'La flexibilidad que necesitas para integrar el yoga en tu vida. Con nuestras clases combinadas, puedes alternar entre sesiones presenciales y online, disfrutando de lo mejor de ambos mundos. Ideal para mantener la continuidad en tu práctica, independientemente de tus horarios o ubicación.',
        img: '',
        descripcion2: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.',
        id: 3
    }
]


import imgholistica from '@/app/lib/imgintropropholistica.png'

export const yogaholistica = [
    {
        title: 'PROPUESTAS DE EXPERIENCIAS HOLISTICAS PARA EL TURISMO',
        subtitle: 'SUBTITULO',
        text1: 'La provincia de Córdoba, con su riqueza natural, cultural y espiritual, se posiciona como un destino ideal para el turismo holístico y de bienestar. Nuestra propuesta busca potenciar estas características únicas, integrando experiencias que conecten a visitantes con los paisajes, la tradición y el cuidado integral del cuerpo y la mente.',
        text2: 'Diseñamos actividades que combinan prácticas ancestrales, terapias modernas y productos locales, fomentando un turismo sostenible, vivencial y con impacto positivo tanto en los visitantes como en la comunidad local.',
        img: imgholistica
    }
]


export const yogaholisticasub = [
    {
        nombre: 'YOGA Y NATURALEZA: RECONEXION EN ESCENARIOS AUTENTICOS',
        descripcion: 'Sesiones de yoga al aire libre en lugares emblemáticos de Córdoba como el Valle de Calamuchita, las Sierras Chicas o el Parque Nacional Quebrada del Condorito',
        img: '',
        descripcion2: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.',
        id: 1
    },
    {
        nombre: 'CEREMONIAS DE CACAO: TRADICION Y SANACION EN CORDOBA',
        descripcion: 'Ceremonias inspiradas en la cosmovisión indígena que integran el cacao ceremonial con música, danza y conexión grupal. Se utilizará cacao orgánico producido de manera ética, complementado con hierbas locales como peperina y palo santo',
        img: '',
        descripcion2: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.',
        id: 2
    },
    {
        nombre: 'EXPERIENCIAS SENSORIALES DE BIENESTAR',
        descripcion: 'Circuitos holísticos que combinan actividades como yoga, mindfulness y tratamientos de spa con productos locales.',
        img: '',
        descripcion2: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quam sit ratione placeat temporibus quidem unde, exercitationem quod debitis.',
        id: 3
    }
]


export const reviews = [
    {
        name: 'NANCY ROMERO',
        review: 'En el 2024 decidí tomar clases de Yoga , no conocía nada de esta actividad y la profe Belén fue la que me adentro en este nuevo mundo de Yoga , actividad que realice durante todo el año que ha dado salud, tranquilidad , mejora y mayor flexibilidad a mis movimientos.'
    },
    {
        name: 'PATRICIA SERRA',
        review: 'Mis clases de yoga con la profe Bel. Comencé a probar con esta práctica ya que no estaba muy convencida . Pero lleno todas mis expectativas.  Bel me enseñó a respirar a bajar la ansiedad y el estrés mi calidad de sueño es mucho mejor y tranquilidad en mi trabajo. '
    },
    {
        name: 'ROMINA GARCIA',
        review: 'Las clases de yoga con Bel son paz y amor. Me lleva mediante la practica de yoga y la meditación a lugares muy bonitos dentro mío...y me permite conectar conmigo..con el aquí y ahora. Logro con mi cuerpo elongación ,equilibrio....armonía. Namaste'
    },
    {
        name: 'MAJO BARRERA',
        review: 'Mi primer experiencia con el yoga es con Bel... buscaba mover el cuerpo y no solo eso encontré sino también un estímulo a mi alma y espíritu. Soy feliz de muchas maneras en sus prácticas y espero que todos encuenten una profe tan amorosa y motivadora como ella. Namaste 🧘'
    },
    {
        name: 'IVANA FIGUEROA',
        review: 'Belen es una profe muy copada. Sus clases son dinámicas, profundas y te ayudan a conectar con el Aquí y Ahora. Siempre propone cosas nuevas y promueve la amistad y el compañerismo. Yo estoy feliz de haberla encontrado y del grupo hermoso que se armó 🥰🥰🥰'
    },
    {
        name: 'ANA DUARTE',
        review: 'Mis clases de yoga con la profe Belén son un espacio y tiempo que me regal, diría que es de encuentro, encuentro conmigo misma con partes de mi cuerpo que con otras actividades no he sido consiente que están ahí, conmigo. Despertando . '
    },
]

import img1 from '@/app/lib/yogaintegral.png'
import img2 from '@/app/lib/introclases2.jpg'
import img3 from '@/app/lib/introclases3.jpg'


export const introClases = [
    {
        name: 'Hatha Yoga',
        text1: 'Sumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. En nuestras clases presenciales, disfrutarás de la conexión directa con el instructor y otros practicantes, mientras profundizas en la respiración',
        id: 1,
        img: img1
    },
    {
        name: 'Yoga Integral',
        text1: 'Sumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. En nuestras clases presenciales, disfrutarás de la conexión directa con el instructor y otros practicantes, mientras profundizas en la respiración',
        id: 2,
        img: img1

    },
    {
        name: 'Yoga Terapia',
        text1: 'Sumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. En nuestras clases presenciales, disfrutarás de la conexión directa con el instructor y otros practicantes, mientras profundizas en la respiración',
        id: 3,
        img: img1
    },
]

export const introPropuestas = [
    {
        name: 'Yoga Empresarial',
        text1: 'Sumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. En nuestras clases presenciales, disfrutarás de la conexión directa con el instructor y otros practicantes, mientras profundizas en la respiración',
        id: 1,
    }, {
        name: 'Experiencias Holísticas',
        text1: 'Sumérgete en la experiencia transformadora del yoga en un entorno cálido y cercano. En nuestras clases presenciales, disfrutarás de la conexión directa con el instructor y otros practicantes, mientras profundizas en la respiración',
        id: 2,
    },

]


import carouselimgs1 from '@/app/lib/carouselimgs1.jpeg'
import carouselimgs2 from '@/app/lib/carouselimgs2.jpeg'
import carouselimgs3 from '@/app/lib/carouselimgs3.jpeg'
import carouselimgs4 from '@/app/lib/carouselimgs4.jpeg'
import carouselimgs5 from '@/app/lib/carouselimgs5.jpeg'
import carouselimgs6 from '@/app/lib/carouselimgs6.jpeg'
import carouselimgs7 from '@/app/lib/carouselimgs7.jpeg'


export const carouselImgs = [
    {
        img: carouselimgs1,
        alt: 'alt1'
    },
    {
        img: carouselimgs2,
        alt: 'alt2'
    },
    {
        img: carouselimgs3,
        alt: 'alt3'
    },
    {
        img: carouselimgs5,
        alt: 'alt5'
    },
    {
        img: carouselimgs6,
        alt: 'alt6'
    },
    {
        img: carouselimgs6,
        alt: 'alt7'
    },
    {
        img: carouselimgs6,
        alt: 'alt8'
    },
]


export const yogaConvencional = [
    {
        name: 'HATHA YOGA',
        text1: 'El Hatha Yoga es la puerta de entrada perfecta para quienes buscan un equilibrio entre cuerpo y mente. A través de posturas (asanas) y técnicas de respiración (pranayama), esta práctica te ayuda a conectar con tu bienestar de manera consciente y progresiva.',
        text2: 'Su ritmo pausado y accesible lo convierte en una opción ideal para principiantes y personas que desean profundizar en la alineación, la fuerza y la flexibilidad sin prisas ni exigencias extremas.',
        text3: 'Además de los beneficios físicos, el Hatha Yoga promueve la relajación mental y el alivio del estrés. Sus sesiones permiten reducir la ansiedad y mejorar la concentración en la vida diaria.',
        text4: 'Si buscas una práctica que te ayude a sentirte mejor en cuerpo y mente, Hatha Yoga es el camino perfecto. Descubre sus beneficios y empieza a transformar tu bienestar hoy mismo.',
        id: 1,

    },
    {
        name: 'YOGA INTEGRAL',
        text1: 'El Yoga Integral es una experiencia completa que armoniza cuerpo, mente y espíritu. No se limita solo a las posturas físicas, sino que integra meditación, respiración y relajación profunda.',
        text2: 'A través de una combinación equilibrada de asanas, pranayama y técnicas de mindfulness, esta práctica te permite explorar un bienestar holístico. Es ideal para quienes buscan una conexión más profunda con ellos mismos y con el presente.',
        text3: 'El Yoga Integral se adapta a todos los niveles y edades, ofreciendo una práctica versátil y enriquecedora. Ya sea que necesites reducir el estrés, mejorar la flexibilidad o fortalecer tu energía vital, aquí encontrarás un espacio para crecer.',
        text4: 'Sumérgete en esta práctica transformadora y siente cómo tu cuerpo se fortalece, tu mente se aquieta y tu espíritu se expande. Vive el yoga en su esencia más completa y natural.',
        id: 2,


    },
    {
        name: 'YOGA TERAPIA',
        text1: 'La Yoga Terapia es una práctica diseñada para sanar el cuerpo y la mente a través del movimiento consciente, la respiración y la relajación. Su enfoque personalizado la hace ideal para quienes buscan aliviar dolores o mejorar su bienestar.',
        text2: 'Cada sesión se adapta a las necesidades individuales, abordando problemas específicos como estrés, ansiedad, dolores musculares o condiciones crónicas. Con técnicas suaves y efectivas, ayuda a recuperar movilidad y equilibrio interno.',
        text3: 'A diferencia del yoga convencional, la Yoga Terapia pone énfasis en la recuperación y la prevención. Es una herramienta poderosa para mejorar la postura, reducir la tensión y promover una vida más saludable y plena.',
        text4: 'Si necesitas un enfoque amoroso y restaurativo para cuidar tu cuerpo y tu mente, la Yoga Terapia es para ti. Conéctate con tu bienestar y experimenta sus efectos sanadores desde la primera clase.',
        id: 3,

    },
]


export const dividerItems = [
    {
        text: '+300',
        text2: 'Alumnos'
    },
    {
        text: '+10',
        text2: 'Años de experiencia'
    },
    {
        text: '+20',
        text2: 'Reconocimientos'
    },
    {
        text: '+10',
        text2: 'Empresas felices'
    },

]