import { imageMap, type ImageKey } from "@/lib/site";

type PictureImageProps = {
  image: ImageKey;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function PictureImage({ image, alt, className, priority = false }: PictureImageProps) {
  const name = imageMap[image];

  return (
    <picture className={className}>
      <source
        type="image/jpeg"
        srcSet={`/img/${name}-480.jpg 480w, /img/${name}-800.jpg 800w, /img/${name}-1200.jpg 1200w`}
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 1200px"
      />
      <img
        src={`/img/${name}-800.jpg`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}
