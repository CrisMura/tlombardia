import type { ImageKey } from "@/lib/site";
import type { ReactNode } from "react";
import { PictureImage } from "./PictureImage";

type HeroProps = {
  badge: string;
  title: string;
  text: string;
  image: ImageKey;
  compact?: boolean;
  children?: ReactNode;
};

export function Hero({ badge, title, text, image, compact = false, children }: HeroProps) {
  return (
    <section className={`hero ${compact ? "hero-compact" : ""}`}>
      <PictureImage image={image} alt="" className="hero-media" priority />
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
