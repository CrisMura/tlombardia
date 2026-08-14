import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Stats } from "@/components/Stats";
import { airportCards, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/transfer-aeropuerto/" },
  title: "Transfer al Aeropuerto en Chile",
  description:
    "Servicio de transfer al aeropuerto 24/7 en Chile: traslados puntuales, seguimiento de vuelos y atención para grupos y familias.",
  openGraph: {
    title: "Transfer al Aeropuerto en Chile | Transportes Lombardía",
    description:
      "Traslados al aeropuerto con seguimiento de vuelos y puntualidad garantizada. Servicio disponible 24/7.",
    url: "/transfer-aeropuerto/",
    images: ["/img/aeropuerto1-1200.jpg"]
  },
  twitter: {
    title: "Transfer al Aeropuerto en Chile | Transportes Lombardía",
    description:
      "Traslados al aeropuerto con seguimiento de vuelos y puntualidad garantizada. Servicio disponible 24/7.",
    images: ["/img/aeropuerto1-1200.jpg"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Transfer Aeropuerto",
  provider: {
    "@type": "LocalBusiness",
    name: site.name,
    url: `${site.url}/`
  },
  areaServed: "Chile",
  url: `${site.url}/transfer-aeropuerto/`
};

export default function TransferAeropuertoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        badge="Transfer Aeropuerto"
        title="Llegada y Salida Sin Preocupaciones"
        text="Servicio de transfer al aeropuerto con seguimiento de vuelos, puntualidad garantizada y atención las 24 horas."
        image="aeropuerto"
        compact
      />
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Servicio de Transfer Aeropuerto</h2>
            <p>Nos encargamos de que llegues a tiempo a tu vuelo o que te esperemos a tu llegada.</p>
          </div>
          <ServiceGrid cards={airportCards} />
        </div>
      </section>
      <Stats />
      <Cta
        title="Reserva tu Transfer al Aeropuerto"
        text="Contáctanos con anticipación y asegura tu traslado. Te esperamos."
        primaryLabel="Reservar por WhatsApp"
        secondaryLabel="Formulario de Contacto"
      />
    </>
  );
}
