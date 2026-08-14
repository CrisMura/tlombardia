import Link from "next/link";
import type { ServiceCard } from "@/lib/site";
import { PictureImage } from "./PictureImage";

type ServiceGridProps = {
  cards: ServiceCard[];
};

export function ServiceGrid({ cards }: ServiceGridProps) {
  return (
    <div className="services-grid">
      {cards.map((card) => (
        <article className="service-card" key={card.title}>
          {card.image ? (
            <PictureImage image={card.image} alt={card.title} className="service-image service-photo" />
          ) : (
            <div className="service-image service-marker" aria-hidden="true">
              {card.marker ?? "TL"}
            </div>
          )}
          <div className="service-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
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
