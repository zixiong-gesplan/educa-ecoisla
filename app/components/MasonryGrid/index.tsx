"use client"

import type { ImageData } from "../../types/IImageData";
import { ImageWrapper as Image } from "../Image";
import Masonry from "react-masonry-css";
import "./masonry.css";

export const MasonryGrid = async ({ images }: {images: ImageData[]}) => {

    const breakpointColumnsObj = {
        default: 4, // Número de columnas por defecto (escritorio)
        1100: 3, // Tres columnas en pantallas medianas
        700: 2, // Dos columnas en pantallas pequeñas
        300: 1, // Una columna en pantallas muy pequeñas
    };

    return (
        <div className="flex justify-center box-border w-full p-2 md:p-4">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="box-border my-masonry-grid w-full max-w-screen-xl"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((image) => (
                    <div key={image.id}>
                        <Image
                            src={image.download_url}
                            alt={image.author}
                            className="box-border w-full"
                        />
                    </div>
                ))}
            </Masonry>
        </div>

    );
}