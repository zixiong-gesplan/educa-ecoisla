import { ImageWrapper as Image } from "./Image";

export const ActivityTarget = ({
  size = 250,
  title,
  text,
  src,
  titleSize,
  textSize,
  className,
}: {
  size?: number;
  title: string;
  text: string;
  src: string;
  titleSize: string;
  textSize: string;
  className: string;
}) => {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={`Imagen de ${text}`}
        size={size}
        className="rounded-lg"
      />

      {/* Filtro */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 w-full h-1/3 z-10
          rounded-lg
          bg-gradient-to-t
           from-bg-custom-green-800 via-bg-custom-green-900
          from-custom-dark-green/80
          via-custom-dark-green/15
          to-transparent
        "
      />

      {/* Caja superior con título */}
      <div className="absolute top-6 left-6 z-20 bg-white px-8 py-4 rounded-lg shadow-md max-w-[80%]">
        <h2 className={`${titleSize} text-custom-dark-green font-normal`}>
          {title}
        </h2>
      </div>

      {/* Texto inferior */}
      <div className="absolute bottom-6 left-6 z-20 w-3/4">
        <p
          className={`${textSize} text-white leading-relaxed drop-shadow-md font-normal`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
