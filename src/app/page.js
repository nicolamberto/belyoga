import Image from "next/image";
import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero_section/heroSection";
import About from "./components/about/about";
import fondo from '@/app/lib/fondo.jpg'
import Divider from "./components/divider/divider";
import Clases from "./components/clases/clases/clases";


export default function Home() {
  return (
    <div className="border-2 border-white h-[2000vh] relative">
      <main className="flex justify-center items-center flex-col gap-5">
        <div>
          <Header />
          <HeroSection />
          <Image
          src={fondo}
          className="absolute opacity-30"
          alt="img"
          width={3000}
          /> 
          <About />
          <Divider/>
          <Clases/>
        </div>

      </main>
    </div>
  );
}
