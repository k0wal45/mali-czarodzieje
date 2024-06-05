import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Mapa from "@/components/Mapa";
import Recent from "@/components/Recent";
import TextShow from "@/components/TextShow";

export default function Home() {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <Hero />
      <Recent />
      <About />
      <Contact />
      <Mapa />
      <TextShow />
    </main>
  )
}
