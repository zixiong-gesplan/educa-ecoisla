"use client";


import { ImageWrapper as Image } from "../Image";
import { FullScreenSpinner } from './FullScreenSpinner';
import Masonry from "react-masonry-css";

import useWindowSize from "./useWindowSize";
import { useModal } from "./useModal";

import { Modal } from "./Modal";

import type { ImageData } from "../../types/IImageData";

import "./masonry.css";

const getColumns = (width: number) => {
    if (width <= 380) return 1; //Columnas pantallas pequeñas
    if (width <= 640) return 2;
    if (width <= 1024) return 3;
    if (width <= 1280) return 4;
    return 5; // Columnas pantallas grandes
};

export const MasonryGrid = ({ images }: { images: ImageData[]; }) => {
    const windowSize = useWindowSize();
    const { selectedImage, isVisible, isOpen, openModal, closeModal} = useModal()

    if (!windowSize) {
        return <FullScreenSpinner />;
    }

    return (
        <div className="flex justify-center box-border w-full h-full p-2 md:p-4">
            <Masonry
                breakpointCols={getColumns(windowSize)}
                className="box-border my-masonry-grid w-full max-w-screen-xl"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((image) => (
                    <div key={image.id} onClick={() => openModal(image)} className="cursor-pointer">
                        <Image
                            src={image.url_img}
                            alt={image.title}
                            className="box-border w-full"
                        />
                    </div>
                ))}
            </Masonry>

            {isOpen && <Modal selectedImage={selectedImage} isVisible={isVisible} closeModal={closeModal} />}

        </div>

    );
};