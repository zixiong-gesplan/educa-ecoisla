
interface Props {
    children: React.ReactNode, 
    direction: 'flex-row-reverse' | 'row'
}


export const Article = ({ children, direction }: Props) => {

	return (
		<article 
            role="article"
            className={`flex ${direction} justify-between max-w-screen-xl px-0 sm:px-2 lg:gap-8 xl:gap-8 py-4 lg:py-8`}>
            {children}
		</article >
	);
}