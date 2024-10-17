"use client"

import { useState } from "react";

import type { ImageData } from "../../types/IImageData";
import { ImageWrapper as Image } from "../Image";
import Masonry from "react-masonry-css";
import "./masonry.css";

export const MasonryGrid = ({ images }: { images: ImageData[] }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string>("");

    const breakpointColumnsObj = {
        default: 4, // Número de columnas por defecto (escritorio)
        1100: 3, // Tres columnas en pantallas medianas
        700: 2, // Dos columnas en pantallas pequeñas
        300: 1, // Una columna en pantallas muy pequeñas
    };

    const openModal = (image: string) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage("");
    };

    return (
        <div className="flex justify-center box-border w-full p-2 md:p-4">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="box-border my-masonry-grid w-full max-w-screen-xl"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((image) => (
                    <div key={image.id} onClick={() => openModal(image.download_url)} className="cursor-pointer">
                        <Image
                            src={image.download_url}
                            alt={image.author}
                            className="box-border w-full"
                        />
                    </div>
                ))}
            </Masonry>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative">
                        <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen" />
                        <button
                            className="absolute top-4 right-4 text-white text-3xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

        </div>

    );
}