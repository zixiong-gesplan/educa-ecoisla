
import Image from "next/image"
import { SVGTicket } from "../components/SVGTicket"
import { Article } from "../components/Article"

export const Tools = () => {
	return (
		<section data-testid="tools" id="plan" className="px-4 flex flex-col items-center max-w-screen-xl gap-0 xl:gap-6">

			<h2 className="text-xl sm:text-2xl w-full text-center text-gray-900 font-extrabold">PLAN DE ACCIÓN</h2>

			<Article direction="row">
				<div className="w-full xl:w-2/3">
					<h3 className="text-2xl md:text-3xl text-custom-light-bg">Educación ambiental</h3>
					<p className="border-b-2 border-custom-light-bg py-4 text-base sm:text-xl dark:text-black">
						Promover actividades educativas con el objetivo de generar conciencia, conocimientos, habilidades
						y actitudes en la población (en el ámbito formal y no formal) y fomentar la participación activa
						en la protección del medioambiente.
					</p>
	
					<ul className="mt-4 text-base sm:text-md gap-2  dark:text-black grid md:grid-cols-2">
						<li className="flex gap-1"> <SVGTicket /> Programas educativos formales</li>
						<li className="flex gap-1"> <SVGTicket /> Talleres</li>
						<li className="flex gap-1"> <SVGTicket /> Actividades de interpretación en campo</li>
						<li className="flex gap-1"> <SVGTicket /> Materiales didácticos</li>
						<li className="flex gap-1"> <SVGTicket /> Capacitación docente</li>
						<li className="flex gap-1"> <SVGTicket /> Proyectos escolares o comunitarios</li>
						<li className="flex gap-1"> <SVGTicket /> Espacios para la educación ambiental</li>
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
						Transmisión de información de manera clara y accesible, sobre temas ambientales en ámbitos específicos,
						para promover la sensibilización en la población general.
					</p>
					<ul className="mt-4 text-base sm:text-md gap-2  dark:text-black grid md:grid-cols-2">
						<li className="flex gap-1"> <SVGTicket /> Campañas de comunicación</li>
						<li className="flex gap-1"> <SVGTicket /> Materiales de divulgación</li>
						<li className="flex gap-1"> <SVGTicket /> Medios digitales y redes sociales</li>
						<li className="flex gap-1"> <SVGTicket /> Ferias y eventos públicos</li>
						<li className="flex gap-1"> <SVGTicket /> Publicaciones y boletines</li>
						<li className="flex gap-1"> <SVGTicket /> Material audiovisual</li>
						<li className="flex gap-1"> <SVGTicket /> Colaboración con medios de comunicación</li>
						<li className="flex gap-1"> <SVGTicket /> Plataformas interactivas</li>
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