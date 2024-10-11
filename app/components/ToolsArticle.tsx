import { SVGTicket } from "./SVGTicket";
import Image from 'next/image';

interface Props {
	align: 'right' | 'left';
	header: string;
	content: string;
	items: string[];
}

export const ToolsArticle = ({ align, header, content, items }: Props) => {

	const margin = (align === 'right') ? 'xl:ml-14' : 'xl:mr-10';

	return (
		<article className="grid max-w-screen-xl px-0 sm:px-2 lg:gap-8 xl:gap-0 py-4 lg:py-8 xl:grid-cols-12">

			{align === 'right' && <div className="hidden xl:mt-0 xl:col-span-5 xl:flex ml-4">
				<Image
					src="/informacion.png"
					alt="Imágen de portada"
					unoptimized={true}
					width={0}
					height={0}
					className="w-auto rounded-2xl"
				/>
			</div>}

			<div className={`place-self-center sm:mx-4 ${margin} xl:col-span-7`}>
				<h3 className="text-2xl sm:text-3xl text-custom-light-bg">{header}</h3>
				<p className="border-b-2 border-custom-light-bg py-4 text-lg sm:text-xl">
					{content}
				</p>
				<ul className="list-none py-6 text-md sm:text-lg font-bold">
					{items.map((item, index) => {
						return (
							<li key={`${align}-${index}`} className="flex items-center py-1">
								<SVGTicket></SVGTicket>
								<span className="ml-2">{item}</span>
							</li>
						);
					})}
				</ul>
			</div>

			{align === 'left' && <div className="hidden xl:mt-0 xl:col-span-5 xl:flex ml-4">
				<Image
					src="/informacion.png"
					alt="Imágen de portada"
					unoptimized={true}
					width={0}
					height={0}
					className="w-auto rounded-2xl ml-3"
				/>
			</div>}

		</article >
	);
}