import type { ImageData } from "../types/interfaces";
import { MasonryGrid } from "./MasonryGrid";

function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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
    await sleep(2000);

    return (
        <MasonryGrid images={data} />
    );

}


