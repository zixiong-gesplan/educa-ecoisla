import Image from "next/image";

export const ImageWrapper = ({
    src,
    alt,
    size=48,
    className,
}:{
    src: string,
    alt: string,
    size?: number,
    className?: string,
}) => {
    return <Image
        src={src} 
        unoptimized 
        alt={alt} 
        width={size} 
        height={size}
        className={className}
    />
}