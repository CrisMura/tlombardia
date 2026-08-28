import type { ImageKey } from "@/lib/site";
import type { ReactNode } from "react";
import { HeroCarousel } from "./HeroCarousel";
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
        <HeroCarousel images={images} />
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
