import { Geist, Geist_Mono, tan_pearl, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import localFont from 'next/font/local';


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

export const metadata = {
  title: "Bel Yoga Estudio",
  description: "landing-page-belyogaestudio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${tanpearl.className} antialiased bg-[#f5ebe0] bg-opacity-60`}
      >
        <Header />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
