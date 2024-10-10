import Image from "next/image"

export const Hero = () => {
	return (
		<section>
			<div className="grid max-w-screen-xl px-0 sm:px-2 py-8 mx-4 lg:gap-8 xl:gap-0 lg:py-16 xl:grid-cols-12">
				<div className="mr-auto place-self-center xl:col-span-7">
					<h2 className="text-2xl sm:text-5xl">La educación ambiental supone una pieza importante en la conservación del territorio.</h2>
					<p className="mt-4 text-lg sm:text-2xl">La consejería de Medio Ambiente del Cabildo de Gran Canaria ha implementado un Plan de Acción de Educación Ambiental
						para la Sostenibilidad, centrado en la concienciación social sobre la conservación del medio ambiente.
					</p>
					<div className="mt-6 w-[200px] lg:w-2/3 flex justify-start gap-2" >
						<button className="flex items-center justify-between text-white border-custom-dark-green border-4 bg-custom-dark-green rounded-lg mr-1 px-4 py-2 w-60 lg:w-[300px]">
							<div className="w-2/3 text-center flex justify-center items-center text-sm md:text-base">Galería de Actividades</div>
							<svg className="w-12 h-12 text-white dark:text-white content-center ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
							</svg>
						</button>
						<button className="flex items-center justify-between border-custom-dark-green border-4 text-custom-dark-green bg-white rounded-lg px-4 py-2 w-60 lg:w-[300px]">
							<div className="w-2/3 text-center flex justify-center items-center text-sm md:text-base">Próxima actividad</div>
							<svg className="w-12 h-12 text-custom-dark-green dark:text-white content-center ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
							</svg>
						</button>
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