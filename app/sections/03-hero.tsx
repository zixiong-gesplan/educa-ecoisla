import Image from "next/image"
import { ButtonDark } from '../components/ButtonDark';
import { ButtonLight } from '../components/ButtonLight';
import { SVGCodes } from "../types/SVG-codes";

export const Hero = () => {
	return (
		<section id="inicio">
			<div className="grid max-w-screen-xl px-0 sm:px-2 py-8 mx-4 lg:gap-8 xl:gap-0 lg:py-16 xl:grid-cols-12">
				<div className="mr-auto place-self-center xl:col-span-7">
					<h2 className="text-2xl sm:text-5xl">La educación ambiental supone una pieza importante en la conservación del territorio.</h2>
					<p className="mt-4 text-lg sm:text-2xl">La consejería de Medio Ambiente del Cabildo de Gran Canaria ha implementado un Plan de Acción de Educación Ambiental
						para la Sostenibilidad, centrado en la concienciación social sobre la conservación del medio ambiente.
					</p>
					<div className="flex mt-6 md:w-2/3 flex-row justify-start gap-2" >

						<ButtonDark
							content="Galería de Actividades"
							d={SVGCodes.Image}
						>
						</ButtonDark>

						<ButtonLight
							content="Próxima actividad"
							d={SVGCodes.ArrowUpRight}
						>
						</ButtonLight>

					</div>
				</div>
				<div className="hidden xl:mt-0 xl:col-span-5 xl:flex ml-4">
					<Image
						src="/informacion.png"
						alt="Imágen de portada"
						unoptimized={true}
						width={0}
						height={0}
						className="w-auto rounded-2xl"
					/>
				</div>
			</div>
		</section>);
}