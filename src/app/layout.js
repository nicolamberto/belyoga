import { Geist, Geist_Mono, tan_pearl, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import localFont from 'next/font/local';
import { FaWhatsapp } from "react-icons/fa";
import whatsapp from '@/app/lib/whatsappicon.png'
import Image from "next/image";
import Link from "next/link";
import logo from '@/app/favicon.ico'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300']
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tanaegean = localFont({
  src: [
    {
      path: './fonts/tanaegean.ttf',
    }
  ]
})


const tanpearl = localFont({
  src: [
    {
      path: './fonts/tanpearl.otf',
    }
  ]
})

export {tanpearl}

const metadata = {
  title: "Bel Yoga Espacio",
  description: "Espacio de yoga en Córdoba, Argentina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
{/*       <head>
        <link rel="icon" href={logo} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head> */}
      <body
        className={`${tanaegean.className} antialiased bg-[#f5ebe0] bg-opacity-60 relative`}
      >
        <Header />
        {children}
        <Contact />
        <div className="sticky z-30 bottom-0 right-0 p-2 rounded-full flex justify-end">
          <Link
            href={'https://api.whatsapp.com/send?phone=5493518522977&text=Hola!%20Quiero%20averiguar%20mas%20sobre%20yoga!%20Mi%20nombre%20es:%20'}
            target="_blank"
            className="">
            <Image
              src={whatsapp}
              width={100}
              alt="wsp"
            />
          </Link>
        </div>
        <Footer />

      </body>
    </html>
  );
}
