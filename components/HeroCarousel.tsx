"use client";

import { useEffect, useState } from "react";
import type { ImageKey } from "@/lib/site";
import { PictureImage } from "./PictureImage";

type HeroCarouselProps = {
  images: readonly ImageKey[];
};

const SLIDE_DELAY = 7000;
const TRANSITION_DURATION = 900;

export function HeroCarousel({ images }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || nextIndex !== null) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setNextIndex((currentIndex + 1) % images.length);
      setEntering(false);
    }, SLIDE_DELAY);

    return () => window.clearTimeout(timeout);
  }, [currentIndex, images.length, nextIndex]);

  useEffect(() => {
    if (nextIndex === null) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setEntering(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [nextIndex]);

  useEffect(() => {
    if (nextIndex === null || !entering) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setCurrentIndex(nextIndex);
      setNextIndex(null);
      setEntering(false);
    }, TRANSITION_DURATION + 100);

    return () => window.clearTimeout(timeout);
  }, [entering, nextIndex]);

  const finishTransition = () => {
    if (nextIndex === null) {
      return;
    }

    setCurrentIndex(nextIndex);
    setNextIndex(null);
    setEntering(false);
  };

  return (
    <div className="hero-gallery" aria-hidden="true">
      <PictureImage
        image={images[currentIndex]}
        alt=""
        className="hero-media hero-media-base"
        priority={currentIndex === 0}
        sizes="100vw"
      />
      {nextIndex !== null ? (
        <PictureImage
          image={images[nextIndex]}
          alt=""
          className={`hero-media hero-media-overlay ${entering ? "is-entering" : ""}`}
          priority={nextIndex === 0}
          sizes="100vw"
          onTransitionEnd={finishTransition}
        />
      ) : null}
    </div>
  );
}
