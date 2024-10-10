import Image from "next/image"
import { CustomButton } from "../components/CustomButton";

export const Hero = () => {
	return (
		<section>
			<div className="grid max-w-screen-xl px-0 sm:px-2 py-8 mx-4 lg:gap-8 xl:gap-0 lg:py-16 xl:grid-cols-12">
				<div className="mr-auto place-self-center xl:col-span-7">
					<h2 className="text-2xl sm:text-5xl">La educación ambiental supone una pieza importante en la conservación del territorio.</h2>
					<p className="mt-4 text-lg sm:text-2xl">La consejería de Medio Ambiente del Cabildo de Gran Canaria ha implementado un Plan de Acción de Educación Ambiental
						para la Sostenibilidad, centrado en la concienciación social sobre la conservación del medio ambiente.
					</p>
					<div className="flex mt-6 md:w-2/3 flex-row justify-start gap-2" >

						<CustomButton
							content="Galería de Actividades"
							textcolor="text-white"
							bg="bg-custom-green-800"
							opa=""
							opahover="hover:bg-custom-green-900"
							contentwidth="w-2/3"
							d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
						>
						</CustomButton>

						<CustomButton
							content="Próxima actividad"
							textcolor="text-custom-dark-green"
							bg="bg-custom-light-bg"
							opa="bg-opacity-20"
							opahover="hover:bg-opacity-40"
							contentwidth="w-2/3"
							d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
						>
						</CustomButton>

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