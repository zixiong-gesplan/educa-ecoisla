"use client";


import { ImageWrapper as Image } from "../Image";
import { FullScreenSpinner } from './FullScreenSpinner';
import Masonry from "react-masonry-css";

import useWindowSize from "./useWindowSize";
import { useModal } from "./useModal";

import { Modal } from "./Modal";

import { getColumns } from '@/app/helpers/screen';
import type { ImageData } from "../../types/IImageData";

import "./masonry.css";

export const MasonryGrid = ({ images }: { images: ImageData[]; }) => {
  const windowSize = useWindowSize();
  const { selectedImage, isVisible, isOpen, openModal, closeModal } = useModal()

  if (!windowSize) {
    return <FullScreenSpinner />;
  }

  return (
    <div data-testid="mansonry-grid" className="flex justify-center box-border w-full h-full p-2 md:p-4">
      <Masonry
        breakpointCols={getColumns(windowSize)}
        className="box-border my-masonry-grid w-full max-w-screen-xl"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image) => (
          <button key={image.id} onClick={() => openModal(image)} className="cursor-pointer">
            <Image
              src={image.url_img}
              alt={image.alt}
              className="box-border w-full"
            />
          </button>
        ))}
      </Masonry>

      {isOpen && <Modal selectedImage={selectedImage} isVisible={isVisible} closeModal={closeModal} />}

    </div>

  );
};