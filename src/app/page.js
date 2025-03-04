import Image from "next/image";
import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero_section/heroSection";
import About from "./components/about/about";
import fondo from '@/app/lib/fondo.jpg'
import Divider from "./components/divider/divider";
import Clases from "./components/clases/clases/clases";
import ReviewList from "./components/reviews/reviews/reviewlist";
import EmblaCarouselClases from "./components/intro-clases/intro-clases/EmblaCarouselClases";
import IntroYoga from "./components/introyoga/introyoga";
import EmblaCarouselPropuestas from "./components/intropropuestas/introclases/EmblaCarouselPropuestas";
import divisor from '@/app/lib/divisor.png'
import CallToAction from "./components/cta/cta";
import CarouselImgs from "./components/carouselimgs/carouselimgs";



export default function Home() {
  return (
    <div className="relative ">
      <main className="flex justify-center items-center flex-col gap-5">

        <HeroSection />
        <IntroYoga />
        <Divider />
        <EmblaCarouselClases />
        <EmblaCarouselPropuestas />
        <CallToAction />
        <CarouselImgs />
        {/* <ReviewList /> */}

      </main>
    </div>
  );
}
