"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { stats } from "@/lib/site";

const animatedLabels = new Set(["Años de Experiencia", "Clientes Atendidos"]);

function parseStatNumber(value: string) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);

  if (!match) {
    return null;
  }

  return {
    prefix: match[1],
    value: Number(match[2]),
    suffix: match[3]
  };
}

function AnimatedStatNumber({ number, label }: { number: string; label: string }) {
  const parsed = useMemo(() => parseStatNumber(number), [number]);
  const [displayValue, setDisplayValue] = useState(parsed?.value ?? 0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const shouldAnimate = Boolean(parsed && animatedLabels.has(label));

  useEffect(() => {
    if (!shouldAnimate || !parsed) {
      return;
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayValue(parsed.value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [parsed, shouldAnimate]);

  useEffect(() => {
    if (!hasStarted || !parsed || !shouldAnimate) {
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;
    const duration = 1400;
    const targetValue = parsed.value;

    function tick(timestamp: number) {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(targetValue * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted, parsed, shouldAnimate]);

  if (!parsed) {
    return (
      <div className="stat-number" ref={ref}>
        {number}
      </div>
    );
  }

  return (
    <div className="stat-number" ref={ref}>
      {parsed.prefix}
      {shouldAnimate ? displayValue : parsed.value}
      {parsed.suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item) => (
            <div className="stat-item" key={item.label}>
              <AnimatedStatNumber number={item.number} label={item.label} />
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
