import { Suspense } from "react";
import { ImageGrid } from "../components/ImageGrid";

export default function Gallery() {
    return (
        <Suspense fallback={<p>Cargando Imágenes...</p>}>
            <ImageGrid />
        </Suspense>
    );
};