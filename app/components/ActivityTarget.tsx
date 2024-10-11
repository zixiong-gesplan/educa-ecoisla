import { ImageWrapper as Image } from "./Image";

export const ActivityTarget = ({size=250, text}: {size?: number, text: string}) => {

    return (
        <div className="mb-2 min-h-full">

            <Image
                src="/informacion.png"
                alt={`Imagen de ${text}`} 
                size={size}
                className="rounded-lg" />

            <h4 className="w-full text-xs sm:text-base text-center mt-1 sm:mt-3">{text}</h4>

        </div>
    );

}