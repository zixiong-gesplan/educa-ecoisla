import Link from "next/link";
import { ActivityTarget } from "../components/ActivityTarget";
import { MoreActivities } from "../components/MoreActivities";

export const Actions = () => {
	return (
		<section id="actividades" className="mx-4 max-w-screen-xl">

			<h2 className="m-6 text-2xl w-full text-center text-gray-900 font-extrabold">ACTIVIDADES</h2>

			<div className="grid grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-12 dark:text-black">

				<ActivityTarget size={250} text="Talleres en aula" />
				<ActivityTarget size={250} text="Salidas al campo" />
				<ActivityTarget size={250} text="Rutas al campo" />
				<ActivityTarget size={250} text="Ferias" />
				<ActivityTarget size={250} text="Colaboraciones" />

				<MoreActivities text="Más actividades" />

			</div>
			<div className=" w-full flex justify-center items-center">

				<Link
					href="/gallery"
					className="text-custom-light-bg text-lg sm:text-2xl text-center mt-6">
					Accede a todas las actividades realizadas
				</Link>

				<svg className="w-6 h-6 text-custom-light-bg dark:text-white  mt-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
				</svg>

			</div>

		</section>
	);

}