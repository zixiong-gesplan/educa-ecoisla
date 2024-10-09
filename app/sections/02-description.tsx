import Image from "next/image"

export const Description = () => {
	return (<>
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
		</section>

		<section className="m-4 text-xl mx-4 md:mx-8 max-w-screen-xl">

			<div className="bg-[#83AC50] p-8 rounded-lg">
				<p className="font-bold text-2xl text-white">
					La conservación de la vida silvestre como vía prioritaria para garantizar el mantenimiento de
					la riqueza, la diversidad genética y de los procesos ecológicos esenciales.
				</p>
				<p className="text-2xl text-white mt-4">
					En el caso de Canarias es una herramienta imprescindible para trabajar en pro de la preservación y
					conservación de su rica biodiversidad y entornos naturales únicos.
				</p>
			</div>
			<div className="flex flex-col lg:flex-row m-0 items-center mt-8">
				<div className="lg:w-2/5 h-full">
					<Image
						src="/informacion.png"
						alt="informacion"
						unoptimized={true}
						width={751}
						height={307}
						className=""
					/>
				</div>

				<div className="w-full lg:w-3/5 lg:pl-8 flex flex-col justify-between gap-8 mt-8 lg:mt-0">
					<p className="text-lg text-gray-900">
						La aprobación en 2015 de la Agenda 2030 para el Desarrollo Sostenible, por parte de la
						Asamblea General de Naciones Unidas, supuso un gran reto para el avance en diferentes aspectos de cara a la mejora de las condiciones de vida en el planeta.
					</p>
					<p className="text-lg text-gray-900">
						Desde la Consejería de Medio Ambiente, Clima, Energía y Conocimiento del Cabildo de Gran
						Canaria, se ha querido iniciar la puesta en marcha de un Plan de Acción de Educación Ambiental para la Sostenibilidad con el fin de trabajar los problemas que inciden
						en el medio ambiente desde una perspectiva global y preventiva.
					</p>
					<p className="text-lg text-gray-900">
						Se trata de un Plan que reúne una serie de acciones con las que se pretende promover la concienciación social sobre los temas que afectan en la actualidad a la conservación del medio
						natural. Así, se han incluido temas relacionados con la conservación de la biodiversidad, la adquisición de buenas prácticas relacionadas con la eficiencia energética, el consumo responsable de los recursos, como agua y electricidad, la reducción y reciclaje de residuos, entre otros.
					</p>
				</div>
			</div>
		</section>
	</>);

}