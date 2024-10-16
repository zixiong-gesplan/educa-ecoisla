import { Suspense } from "react";
import { ImageGrid } from "../components/ImageGrid";
import { MasonrySkeleton } from "../components/MasonryGrid/MasonrySkeleton";

export default async function Gallery() {
    return (
        <div className="min-h-screen">
            <Suspense fallback={<MasonrySkeleton />}>
                <ImageGrid />
            </Suspense>
        </div>
    );
};