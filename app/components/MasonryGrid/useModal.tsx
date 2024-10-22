import { useState, useEffect } from "react";

import type { ImageData } from "../../types/ImageData";
const KEYS = {
    ESCAPE: 'Escape',

}
export const useModal = () => {
    const [status, setStatus] = useState<boolean>(false);
    const [image, setImage] = useState<ImageData | undefined>(undefined);
    const [visible, setVisible] = useState(false);

    const open = (image: ImageData) => {
        setImage(image);
        setStatus(true);
    };

    const close = () => {
        setStatus(false);
        setImage(undefined);
    };

    useEffect(() => {
        setVisible(status);
    }, [status]);

    useEffect(() => {
        if (!status) {
           return;
        }
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key !== KEYS.ESCAPE) {
                return;
            }
            close();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [status]);

    return { image, visible, status,  open, close };

}