import { useState, useEffect } from "react";

import type { ImageData } from "../../types/IImageData";

export const useModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<ImageData | undefined>(undefined);
    const [isVisible, setIsVisible] = useState(false);

    const openModal = (image: ImageData) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(undefined);
    };

    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
           return;
        }
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key !== 'Escape') {
                return;
            }
            closeModal();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return { selectedImage, isVisible, isOpen,  openModal, closeModal };

}