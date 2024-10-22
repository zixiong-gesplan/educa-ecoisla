import { ImageWrapper as Image } from "./Image";
// Evitar redundancias en el alt de las imagenes como "Imagen acerca de.... "
export const ActivityTarget = ({
  size = 250,
  text,
}: {
  size?: number;
  text: string;
}) => {
  return (
    <div className="mb-2 min-h-full">
      <Image
        src="/informacion.png"
        alt={text}
        size={size}
        className="rounded-lg"
      />

      <h4 className="w-full text-xs sm:text-lg text-center mt-1 sm:mt-3">
        {text}
      </h4>
    </div>
  );
};
