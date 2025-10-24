import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Programs />
		</main>
	)
}
