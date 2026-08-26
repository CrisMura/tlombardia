import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Stats } from "@/components/Stats";
import { site, tourismCards } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/turismo/" },
  title: "Turismo en Chile",
  description:
    "Rutas turísticas, escapadas y circuitos por Chile para familias y grupos. Transporte cómodo, seguro y personalizado.",
  openGraph: {
    title: "Turismo en Chile | Transportes Lombardía",
    description: "Rutas turísticas, escapadas y circuitos por Chile para familias y grupos.",
    url: "/turismo/",
    images: ["/img/turismo-valparaiso-experiencias-1200.jpg"]
  },
  twitter: {
    title: "Turismo en Chile | Transportes Lombardía",
    description: "Rutas turísticas, escapadas y circuitos por Chile para familias y grupos.",
    images: ["/img/turismo-valparaiso-experiencias-1200.jpg"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Turismo",
  provider: {
    "@type": "LocalBusiness",
    name: site.name,
    url: `${site.url}/`
  },
  areaServed: "Chile",
  url: `${site.url}/turismo/`
};

export default function TurismoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        badge="Turismo"
        title="Descubre Valparaíso con Nosotros"
        text="Rutas turísticas personalizadas, circuitos y escapadas. Vive experiencias únicas junto a tu familia o grupo de amigos."
        image="turismoValparaisoExperiencias"
        compact
      />
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Servicios Turísticos</h2>
            <p>Te llevamos a los mejores destinos de Chile con comodidad y seguridad.</p>
          </div>
          <ServiceGrid cards={tourismCards} className="services-grid-list" />
        </div>
      </section>
      <Stats />
      <Cta
        title="Planifica tu Próxima Aventura"
        text="Contáctanos y te ayudamos a planificar el viaje turístico perfecto para ti."
        primaryLabel="Consultar por WhatsApp"
        secondaryLabel="Formulario de Contacto"
      />
    </>
  );
}
