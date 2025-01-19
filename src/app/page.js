import Image from "next/image";
import Header from "./components/header/header";
import HeroSection from "./components/hero-section/heroSection";
import About from "./components/about/about";

export default function Home() {
  return (
    <div className="h-[300vh]">
      <main className="flex justify-center items-center flex-col gap-5">
        <Header/>
        <HeroSection/>
        <About/>
      </main>
    </div>
  );
}
