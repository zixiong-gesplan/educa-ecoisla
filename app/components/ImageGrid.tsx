import type { ImageData } from "../types/IImageData";
import { MasonryGrid } from "./MasonryGrid";

export const ImageGrid = async () => {
  let data: ImageData[] = [];

  const fetchImages = async () => {
    try {

      const response = await fetch("https://picsum.photos/v2/list");
      data = await response.json();

    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  await fetchImages();

  return (
    <MasonryGrid images={data} />
  );

}


