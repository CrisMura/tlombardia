import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Stats } from "@/components/Stats";
import { site, specialTripsCards } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/viajes-especiales/" },
  title: "Viajes Especiales y Eventos",
  description:
    "Transporte para matrimonios, conciertos, empresas y celebraciones en Chile. Viajes especiales con flota adaptada y atención profesional.",
  openGraph: {
    title: "Viajes Especiales y Eventos | Transportes Lombardía",
    description: "Transporte para matrimonios, conciertos, empresas y celebraciones en Chile.",
    url: "/viajes-especiales/",
    images: ["/img/viajes_especiales5-1200.jpg"]
  },
  twitter: {
    title: "Viajes Especiales y Eventos | Transportes Lombardía",
    description: "Transporte para matrimonios, conciertos, empresas y celebraciones en Chile.",
    images: ["/img/viajes_especiales5-1200.jpg"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Viajes Especiales",
  provider: {
    "@type": "LocalBusiness",
    name: site.name,
    url: `${site.url}/`
  },
  areaServed: "Chile",
  url: `${site.url}/viajes-especiales/`
};

export default function ViajesEspecialesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        badge="Viajes Especiales"
        title="Eventos Inolvidables con el Mejor Servicio"
        text="Organizamos el transporte para tus eventos más importantes: matrimonios, conciertos, convenios empresariales y más."
        image="viajes"
        compact
      />
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Servicios de Viajes Especiales</h2>
            <p>Contamos con flota diversa para adaptarnos a las necesidades de tu evento.</p>
          </div>
          <ServiceGrid cards={specialTripsCards} />
        </div>
      </section>
      <Stats />
      <Cta
        title="¿Necesitas Cotizar un Viaje Especial?"
        text="Contáctanos y te entregamos una cotización personalizada para tu evento."
        primaryLabel="Cotizar por WhatsApp"
        secondaryLabel="Formulario de Contacto"
      />
    </>
  );
}
