import Link from "next/link";
import { Compass, ShieldCheck, Telescope } from "lucide-react";
import type { ServiceCard } from "@/lib/site";
import { PictureImage } from "./PictureImage";

type ServiceGridProps = {
  cards: ServiceCard[];
  className?: string;
};

function renderDescription(description: string) {
  const parts = description.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function renderIcon(icon: ServiceCard["icon"]) {
  if (icon === "mission") {
    return <Compass aria-hidden="true" />;
  }

  if (icon === "vision") {
    return <Telescope aria-hidden="true" />;
  }

  return <ShieldCheck aria-hidden="true" />;
}

export function ServiceGrid({ cards, className }: ServiceGridProps) {
  return (
    <div className={`services-grid${className ? ` ${className}` : ""}`}>
      {cards.map((card) => (
        <article className="service-card" key={card.title}>
          {card.icon ? (
            <div className="service-image service-icon-panel">{renderIcon(card.icon)}</div>
          ) : card.image ? (
            <PictureImage image={card.image} alt={card.title} className="service-image service-photo" />
          ) : (
            <div className="service-image service-marker" aria-hidden="true">
              {card.marker ?? "TL"}
            </div>
          )}
          <div className="service-content">
            <h3>{card.title}</h3>
            <p>{renderDescription(card.description)}</p>
            {card.href ? (
              <Link href={card.href} className="service-link">
                Más información
              </Link>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
