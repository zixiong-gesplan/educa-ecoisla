import type { ImageData } from "../types/IImageData";
import { MasonryGrid } from "./MasonryGrid";
import jsonData from '../mockData/mockData.json';

const data: ImageData[] = jsonData;

export const ImageGrid = async () => {
  return (
    <MasonryGrid images={data} />
  );

}


