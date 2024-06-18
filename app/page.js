import About from "@/components/About";
import Contact from "@/components/Contact";
import Founders from "@/components/Founders";
import Hero from "@/components/Hero";
import Mapa from "@/components/Mapa";
import Recent from "@/components/Recent";
import TextShow from "@/components/TextShow";

export const revalidate = 3600;

export default function Home() {
	return (
		<main className="max-w-screen overflow-x-hidden">
			<Hero />
			<Recent />
			<About />
			<Founders />
			<Contact />
			<Mapa />
			<TextShow />
		</main>
	);
}
