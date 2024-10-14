import { Hero } from "./sections/03-hero";
import { Objetives } from "./sections/04-objetives";
import { Targets } from "./sections/05-targets";
import { Tools } from "./sections/06-tools";
import { Actions } from "./sections/07-actions";
import { Collaborations } from "./sections/08-Collaborations";
import { Footer } from "./sections/09-footer";

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center">
				<Hero></Hero>
				<Objetives></Objetives>
				<Targets></Targets>

				<section className="h-6"></section>
				<Tools></Tools>
				<Actions></Actions>
				<section className="h-10"></section>
				<Collaborations />

			</main>
			<Footer></Footer>
		</>
	);
}
