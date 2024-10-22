import { ImageData } from "./ImageData";

export interface ModalProps {
    image?: ImageData,
    visible: boolean,
    close: () => void,
}