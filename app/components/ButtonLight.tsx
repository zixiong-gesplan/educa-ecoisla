import Link from "next/link";
import { ButtonProps } from "../types/ButtonProps";

export const ButtonLight = ({ content, d, href = "#" }: ButtonProps) => {
    return (
        <Link href={href} className="flex items-center justify-between text-custom-dark-green bg-custom-light-bg bg-opacity-20
         hover:bg-opacity-40 rounded-lg px-4 py-2 w-full md:w-72 border-custom-dark-green border-4">
            <div className="w-2/3 text-center flex justify-center items-center text-sm md:text-base">{content}</div>
            <svg data-testid="icon-svg" className="w-12 h-12 content-center ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
            </svg>
        </Link>
    );
};