import { Target } from '../components/Target';
import { SVGCodes } from '../types/SVG-codes';

export const Objetives = () => {
	return (
		<section id="objetivos" className="mt-4 bg-[#B0CB21] p-8 w-full">
			<h1 className="font-bold text-zinc-50 text-center text-2xl">
				OBJETIVOS GENERALES
			</h1>
			<div className="flex flex-wrap	w-full justify-evenly gap-2 mx-auto max-w-screen-xl">
				<Target text="Implementamos  actividades de educación ambiental con mejoras continuas.">
					<svg className="w-[64px] h-[64px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="white" strokeLinecap="round" strokeWidth="2" d={SVGCodes.Group} />
					</svg>

				</Target>
				<Target text="Realizamos formación para el profesorado y colectivos de profesionales de educación ambiental.">
					<svg className="w-[64px] h-[64px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={SVGCodes.Edit} />
					</svg>
				</Target>
				<Target text="Promoción de los escenarios de intervención educativa en la naturaleza.">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlSpace="preserve"
						width={24}
						height={24}
						viewBox="0 0 489.9 489.9"
						fill="white"
						className="w-[64px] h-[64px]  text-gray-800 dark:text-white"
					>
						<path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={SVGCodes.Plant} />
					</svg>
				</Target>
				<Target text="Comunicación y divulgación ambiental.">
					<svg className="w-[64px] h-[64px] text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
						<path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={SVGCodes.Spiker} />
					</svg>

				</Target>
				<Target text="Buscamos la innovación e investigación en el ámbito educativo.">
					<svg
						className="w-[64px] h-[64px] text-gray-800 dark:text-white" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						xmlSpace="preserve"
						viewBox="0 0 256 256"
					>
						<path
							fill="white"
							stroke="white"
							strokeWidth={4}
							d={SVGCodes.Graph}
						/>
					</svg>

				</Target>
			</div>
		</section>);

}