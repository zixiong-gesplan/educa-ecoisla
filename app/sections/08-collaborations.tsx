import { ButtonLight } from "../components/ButtonLight";
import { SVGCodes } from "../types/SVG-codes";
import { ImageWrapper as Image } from "../components/Image";


export const Collaborations = () => {
	return (
		<section className="mx-4 max-w-screen-xl w-full">

			<h3 className="w-full mb-6 md:mb-10 text-xl sm:text-3xl text-center text-black font-bold">En colaboración de</h3>

			<div className="flex flex-col lg:flex-row flex-wrap justify-around items-center w-full">
				<div className="flex flex-col justify-center items-center w-1/2  mb-6">
					<Image src="/Cabildo_Logo.png" alt="Logo Cabildo" className="mb-6 h-32 w-32 md:h-52 md:w-52" />
					<ButtonLight content="VISITAR WEB" d={SVGCodes.ArrowUpRight}></ButtonLight>
				</div>

				<div className="flex flex-col justify-center items-center w-1/2 mb-6">
					<Image src="/logo_gesplan.png" alt="Logo Gesplan" className="mb-6 h-32 w-32 md:h-52 md:w-52" />
					<ButtonLight content="VISITAR WEB" d={SVGCodes.ArrowUpRight}></ButtonLight>
				</div>
			</div>

		</section>
	);

}