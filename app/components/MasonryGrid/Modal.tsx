"use client";

import { ModalProps } from "@/app/types/ModalProps";
import { ImageWrapper as Image } from "../Image";
export const Modal = ({ image , visible, close }: ModalProps) => {
  return (
    <div
      className={`transition-opacity duration-1000 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="relative">
          <Image
            src={image!.download_url}
            alt={image!.id}
            className="w-full h-full max-w-full max-h-screen"
          />
          <button
            className="absolute top-2 right-4 text-white text-3xl"
            onClick={close}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};
