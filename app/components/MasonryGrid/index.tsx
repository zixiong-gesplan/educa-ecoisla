"use client"

import type { MasonryGridProps } from "../../types/interfaces";
import { ImageWrapper as Image } from "../Image";
import Masonry from "react-masonry-css";
import "./masonry.css";

export const MasonryGrid: React.FC<MasonryGridProps> = async ({ images }) => {
    
    const breakpointColumnsObj = {
        default: 4, // Número de columnas por defecto (escritorio)
        1100: 3, // Tres columnas en pantallas medianas
        700: 2, // Dos columnas en pantallas pequeñas
        300: 1, // Una columna en pantallas muy pequeñas
    };

    return (
        <div className="flex justify-center w-ful m-4">
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid w-full max-w-screen-xl"
            columnClassName="my-masonry-grid_column"
        >
            {images.map((image) => (
                <div key={image.id}>
                    <Image
                        src={image.download_url}
                        alt={image.author}
                        layout="responsive"
                    />
                </div>
            ))}
        </Masonry>
        </div>

    );
}