
import Image from "next/image"
import { SVGTicket } from "../components/SVGTicket"
import { Article } from "../components/Article"

export const Tools = () => {
	return (
		<section data-testid="tools" id="plan" className="px-4 flex flex-col items-center max-w-screen-xl gap-0 xl:gap-6">

			<h2 className="text-xl sm:text-2xl w-full text-center text-gray-900 font-extrabold">INSTRUMENTOS PARA ESTAS LABORES</h2>

			<Article direction="row">
				<div className="w-full xl:w-2/3">
					<h3 className="text-2xl md:text-3xl text-custom-light-bg">Educación ambiental</h3>
					<p className="border-b-2 border-custom-light-bg py-4 text-base sm:text-xl dark:text-black">
						Promover actividades educativas destinadas a la ciudadanína de Gran Canaria mediante el ámbito formal y no formal
						(centros escolares, colectivos, administraciones locales, etc.),
						a través de acciones como salidas de campo, campañas de sensibilización, jornadas de voluntariado, etc.
					</p>
					<ul className="mt-4 text-base sm:text-lg flex flex-col gap-4  dark:text-black">
						<li className="flex gap-2"> <SVGTicket /> Salidas al campo</li>
						<li className="flex gap-2"> <SVGTicket /> Campañas de sensibilización</li>
						<li className="flex gap-2"> <SVGTicket /> Voluntariado</li>
					</ul>
				</div>
				<div className="hidden xl:mt-0 xl:block xl:w-1/3">
					<Image
						src="/informacion.png"
						alt="Imágen de portada"
						unoptimized={true}
						width={0}
						height={0}
						className="w-full rounded-2xl"
					/>
				</div>
			</Article>
			<Article direction="flex-row-reverse">
				<div className="w-full xl:w-2/3">
					<h3 className="text-2xl sm:text-3xl text-custom-light-bg">Divulgación ambiental</h3>
					<p className="border-b-2 border-custom-light-bg py-4 text-lg sm:text-xl dark:text-black">
						Mediante este proceso se elaboran materiales divulgativos que promuevan la difusión de contenidos orientados a fomentar la
						concienciación social sobre temas ambientales en ámbitos específicos.
					</p>
					<ul className="mt-4 flex flex-col gap-4 dark:text-black">
						<li className="flex gap-2"> <SVGTicket /> Materiales divulgativos</li>
						<li className="flex gap-2"> <SVGTicket /> Difusión de contenido</li>
						<li className="flex gap-2"> <SVGTicket /> Concienciación social</li>
					</ul>
				</div>
				<div className="hidden xl:mt-0 xl:block xl:w-1/3">
					<Image
						src="/informacion.png"
						alt="Imágen de portada"
						unoptimized={true}
						width={0}
						height={0}
						className="w-full rounded-2xl"
					/>
				</div>

			</Article>
		</section >);
}