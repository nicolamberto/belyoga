import Image from "next/image";
import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero_section/heroSection";
import About from "./components/about/about";
import fondo from '@/app/lib/fondo.jpg'
import Divider from "./components/divider/divider";
import Clases from "./components/clases/clases/clases";
import ReviewList from "./components/reviews/reviews/reviewlist";
import EmblaCarousel from "./components/intro-clases/intro-clases/EmblaCarousel";




export default function Home() {
  return (
    <div className="border-2 border-white h-[2000vh] relative ">
      <main className="flex justify-center items-center flex-col gap-5">
        <div>

          <HeroSection />
          <div className="relative z-5">
            <Image
              src={fondo}
              className="absolute opacity-15 z-0"
              alt="img"
              fill={true}
            />
            <About />
            <Divider />

          </div>
          <EmblaCarousel />
          <ReviewList /> 
        </div>
      </main>
    </div>
  );
}
