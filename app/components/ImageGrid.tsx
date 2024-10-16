"use client"

import React, { useState, useEffect } from "react";
import type { ImageData } from "../types/interfaces";

import { MasonryGrid } from "./MasonryGrid";

export const ImageGrid = () => {
    const [images, setImages] = useState<ImageData[]>([]);

    const fetchImages = async () => {
        try {

            const response = await fetch("https://picsum.photos/v2/list");
            const data = await response.json();
            setImages(data);

        } catch (error) {
            console.error("Error fetching images:", error);
        }
    }

    useEffect(() => {
        const call = async () => await fetchImages();
        call();
    }, []);

    return (
        <MasonryGrid images={images} />
    );

}


