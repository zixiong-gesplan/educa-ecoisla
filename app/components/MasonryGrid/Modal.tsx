"use client"

import { ImageWrapper as Image } from "../Image";
import { ImageData } from "@/app/types/IImageData";

interface Props {
    selectedImage?: ImageData,
    isVisible: boolean,
    closeModal: () => void,
}

export const Modal = ({ selectedImage, isVisible, closeModal }: Props) => {
    return (
        <div className={`transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                <div className="relative">
                    <Image src={selectedImage!.url_img} alt="Selected" className="w-full h-full max-w-full max-h-screen" />
                    
                    <div className="absolute top-2 left-2 w-96 p-4 text-white bg-black bg-opacity-70 rounded-lg">
                      <h2 className="text-2xl text-custom-light-bg">{selectedImage?.title}</h2>
                      <p className="text-md py-3">{selectedImage?.description}</p>
                      <p className="text-sm text-custom-light-bg"><a href={selectedImage?.url_event}>Más sobre la actividad...</a></p>
                    </div>
                    
                    <button
                        className="absolute top-2 right-4 text-white text-3xl"
                        onClick={closeModal}
                    >
                        &times;
                    </button>
                </div>
            </div>
        </div>
    );
}