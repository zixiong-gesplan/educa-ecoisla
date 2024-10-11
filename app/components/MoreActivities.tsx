
import { Point } from "./Point";

export const MoreActivities = ({text}: {text: string}) => {
    return (
        <div className="lg:col-span-3 h-auto">

            <div className="flex justify-center items-center h-[23vw] lg:h-[210px] bg-custom-light-bg bg-opacity-10 rounded-lg">

                <Point />
                <Point />
                <Point />

            </div>

            <h3 className="w-full text-center text-xs sm:text-lg md:text-2xl xl:text-3xl mt-1 sm:mt-3 md:mt-[-70px] text-custom-light-bg">{text}</h3>

        </div>
    );
}