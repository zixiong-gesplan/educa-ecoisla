import Image from "next/image"

export const Tools = () => {
	return <section className="px-6 flex flex-col items-center max-w-screen-xl gap-0 xl:gap-6">
		
		<h2 className="text-2xl w-full text-center text-gray-900 font-extrabold">INSTRUMENTOS PARA ESTAS LABORES</h2>
		
		<article className="grid max-w-screen-xl px-0 sm:px-2 lg:gap-8 xl:gap-0 py-4 lg:py-8 xl:grid-cols-12">
			<div className="place-self-center sm:mx-4 xl:mr-10 xl:col-span-7">
				<h3 className="text-2xl sm:text-3xl text-custom-light-bg">Educación ambiental</h3>
				<p className="border-b-2 border-custom-light-bg py-4 text-lg sm:text-xl">
					Promover actividades educativas destinadas a la ciudadanína de Gran Canaria mediante el ámbito formal y no formal
					(centros escolares, colectivos, administraciones locales, etc.),
					a través de acciones como salidas de campo, campañas de sensibilización , jornadas de voluntariado, etc.
				</p>
				<ul className="list-none py-6 text-md sm:text-lg font-bold">
					<li className="flex items-center py-1">
						<svg className="w-6 h-6 text-custom-light-bg dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
							<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
						</svg>
						<span className="ml-2">Salidas al campo</span>
					</li>
					<li className="flex items-center py-1">
						<svg className="w-6 h-6 text-custom-light-bg dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
							<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
						</svg>
						<span className="ml-2">Campañas de sensibilización</span>
					</li>
					<li className="flex items-center py-1">
						<svg className="w-6 h-6 text-custom-light-bg dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
							<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
						</svg>
						<span className="ml-2">Voluntariado</span>
					</li>
				</ul>
			</div>
			<div className="hidden xl:mt-0 xl:col-span-5 xl:flex ml-4">
				<Image
					src="/informacion.png"
					alt="Imágen de portada"
					unoptimized={true}
					width={0}
					height={0}
					className="w-auto rounded-2xl ml-3"
				/>
			</div>
		</article>

		<article className="grid max-w-screen-xl px-0 sm:px-2 lg:gap-8 xl:gap-0 pb-4 lg:pb-8 xl:grid-cols-12">
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
			<div className="place-self-center sm:mx-4 xl:ml-14 xl:col-span-7">
				<h3 className="text-2xl sm:text-3xl text-custom-light-bg">Divulgación ambiental</h3>
				<p className="border-b-2 border-custom-light-bg py-4 text-lg sm:text-xl">
					Mediante el que se elaboran materiales divulgativos, promoviendo la difusión
					de contenidos para el fomento de la concienciación social en determinados ámbitos.
				</p>
				<ul className="list-none py-6 text-md sm:text-lg font-bold">
					<li className="flex items-center py-1">
						<svg className="w-6 h-6 text-custom-light-bg dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
							<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
						</svg>
						<span className="ml-2">Materiales divulgativos</span>
					</li>
					<li className="flex items-center py-1">
						<svg className="w-6 h-6 text-custom-light-bg dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
							<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
						</svg>
						<span className="ml-2">Difusión de contenido</span>
					</li>
					<li className="flex items-center py-1">
						<svg className="w-6 h-6 text-custom-light-bg dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
							<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
						</svg>
						<span className="ml-2">Concienciación social</span>
					</li>
				</ul>
			</div>
		</article>
	</section>
}