import { SVGTicket } from "./SVGTicket";
import { ImageWrapper as Image } from './Image';

interface Props {
    children: React.ReactNode, 
    direction: 'flex-row-reverse' | 'row'
}


export const Article = ({ children, direction }: Props) => {

	return (
		<article 
            role="article"
            className={`flex ${direction} max-w-screen-xl px-0 sm:px-2 lg:gap-8 xl:gap-8 py-4 lg:py-8`}>
            {children}
		</article >
	);
}