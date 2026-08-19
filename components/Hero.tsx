import type { ImageKey } from "@/lib/site";
import type { ReactNode } from "react";
import { PictureImage } from "./PictureImage";

type HeroProps = {
  badge: string;
  title: string;
  text: string;
  image: ImageKey | readonly ImageKey[];
  compact?: boolean;
  children?: ReactNode;
};

export function Hero({ badge, title, text, image, compact = false, children }: HeroProps) {
  const images = Array.isArray(image) ? image : [image];

  return (
    <section className={`hero ${compact ? "hero-compact" : ""}`}>
      {images.length > 1 ? (
        <div className="hero-gallery" aria-hidden="true">
          {images.map((item, index) => (
            <PictureImage
              image={item}
              alt=""
              className="hero-media hero-media-slide"
              priority={index === 0}
              sizes="100vw"
              key={item}
            />
          ))}
        </div>
      ) : (
        <PictureImage image={images[0]} alt="" className="hero-media" priority sizes="100vw" />
      )}
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-badge">{badge}</span>
          <h1>{title}</h1>
          <p>{text}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
