"use client";

import { ImageWrapper as Image } from "../Image";
import { FullScreenSpinner } from "./FullScreenSpinner";
import Masonry from "react-masonry-css";
import useWindowSize from "./useWindowSize";
import { useModal } from "./useModal";
import { Modal } from "./Modal";
import type { ImageData } from "../../types/ImageData";

import "./masonry.css";
import { getColumns } from "./getColumns";

export const MasonryGrid = ({ images }: { images: ImageData[] }) => {
  const windowSize = useWindowSize();
  const { image, visible, status, open, close } = useModal();

  if (!windowSize) {
    return <FullScreenSpinner />;
  }
  /**
   * se cambia el div del contenedor de cada imagen, por un button,
   * button tiene habilitado el control por teclado
   */
  return (
    <div className="flex justify-center box-border w-full h-full p-2 md:p-4">
      <Masonry
        breakpointCols={getColumns(windowSize)}
        className="box-border masonry-grid w-full max-w-screen-xl"
        columnClassName="masonry-grid-column"
      >
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => open(image)}
          >
            <Image
              src={image.download_url}
              alt={image.author}
              className="box-border w-full"
            />
          </button>
        ))}
      </Masonry>

      {status && (
        <Modal image={image} visible={visible} close={close} />
      )}
    </div>
  );
};
