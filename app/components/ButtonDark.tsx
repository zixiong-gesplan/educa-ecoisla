import Link from "next/link"
import { ButtonProps } from "../types/ButtonProps";

export const ButtonDark = ({ content, d, href = "#" }: ButtonProps) => {
    return (
        <Link href={href} className="flex items-center justify-between text-white bg-custom-green-800 hover:bg-custom-green-900 rounded-lg px-4 py-2 w-full md:w-72">
            <div className="w-2/3 text-center flex justify-center items-center text-sm md:text-base">{content}</div>
            <svg data-testid="icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 content-center ml-1">
                <g id="Media / Image_02">
                    <path id="Vector" d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>
        </Link>
    );
}