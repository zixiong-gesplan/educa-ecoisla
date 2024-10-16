"use client"

import React, { useState, useEffect } from "react";

import { ImageWrapper as Image } from "./Image"
import type { ImageData } from "../types/interfaces"


export const ImageGrid = async () => {
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
        <div className="w-full flex justify-center">
            <div className="flex flex-row flex-wrap justify-center items-center gap-4 py-8 max-w-screen-xl">
                {images.map((image) => (
                    <div key={image.id} >
                        <Image className="h-auto w-52 max-w-full rounded-lg" src={image.download_url} alt={image.author} />
                    </div>
                ))}
            </div>
        </div>
    );
}