
interface Props {
    content: string,
    textcolor: string,
    bg: string,
    opa: string,
    opahover: string,
    contentwidth: string,
    d: string
}

export const CustomButton = ({ content, textcolor, bg, opa, opahover, contentwidth, d }: Props) => {
    return (
        <button className={`flex items-center justify-between ${textcolor} ${bg} ${opa} ${opahover} rounded-lg px-4 py-2 w-full md:w-[300px]`}>
            <div className={`${contentwidth} text-center flex justify-center items-center text-sm md:text-base`}>{content}</div>
            <svg className="w-12 h-12 content-center ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
            </svg>
        </button>
    );
}