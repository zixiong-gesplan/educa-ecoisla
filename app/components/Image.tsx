import Image from "next/image";

export const ImageWrapper = ({
    src,
    alt,
    size = 48,
    className,
    layout="raw"
}: {
    src: string,
    alt: string,
    size?: number,
    className?: string,
    layout?: string
}) => {
    return <Image
        src={src}
        unoptimized
        alt={alt}
        width={size}
        height={size}
        layout={layout}
        className={className}
    />
}