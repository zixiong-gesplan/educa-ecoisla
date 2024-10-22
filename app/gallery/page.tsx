import { Suspense } from "react";
import { ImageGrid } from "../components/ImageGrid";
import { FullScreenSpinner } from "../components/MasonryGrid/FullScreenSpinner";

export default async function Gallery() {
  return (
    <Suspense fallback={<FullScreenSpinner />}>
      <div className="min-h-[700px]">
        <ImageGrid />
      </div>
    </Suspense>
  );
}
