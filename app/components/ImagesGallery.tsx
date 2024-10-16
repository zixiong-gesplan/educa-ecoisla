import { Suspense } from "react";
import { ImageGrid } from "./ImageGrid";

export const ImagesGallery = () => {

    return (
        <Suspense fallback={<p>Cargando Imágenes...</p>}>
            <ImageGrid />
        </Suspense>
    );
};