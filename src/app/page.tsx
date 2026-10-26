import ScrollProgress from "@/components/love-journey/ScrollProgress";
import Hero from "@/components/love-journey/Hero";
import Marquee from "@/components/love-journey/Marquee";
import LoveCounter from "@/components/love-journey/LoveCounter";
import Timeline from "@/components/love-journey/Timeline";
import BabySection from "@/components/love-journey/BabySection";
import Gallery from "@/components/love-journey/Gallery";
import LoveLetter from "@/components/love-journey/LoveLetter";
import PromiseHeart from "@/components/love-journey/PromiseHeart";
import Footer from "@/components/love-journey/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <ScrollProgress />
      <main>
        <Hero />
        <Marquee />
        <LoveCounter />
        <Timeline />
        <BabySection />
        <Gallery />
        <LoveLetter />
        <PromiseHeart />
      </main>
      <Footer />
    </div>
  );
}
