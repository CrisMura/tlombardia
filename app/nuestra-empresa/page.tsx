import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Stats } from "@/components/Stats";
import { companyCards, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/nuestra-empresa/" },
  title: "Nuestra Empresa",
  description:
    "Conoce a Transportes Lombardía: más de 20 años de experiencia en transporte de pasajeros, servicio 24/7 y compromiso con la calidad.",
  openGraph: {
    title: "Nuestra Empresa | Transportes Lombardía",
    description: "Más de 20 años de experiencia en transporte de pasajeros en Chile.",
    url: "/nuestra-empresa/",
    images: ["/img/index1-1200.jpg"]
  },
  twitter: {
    title: "Nuestra Empresa | Transportes Lombardía",
    description: "Más de 20 años de experiencia en transporte de pasajeros en Chile.",
    images: ["/img/index1-1200.jpg"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Nuestra Empresa - Transportes Lombardía",
  url: `${site.url}/nuestra-empresa/`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: `${site.url}/`
  }
};

export default function NuestraEmpresaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        badge="Nuestra Empresa"
        title="Compromiso y Calidad en Cada Viaje"
        text="Más de 20 años ofreciendo servicios de transporte de pasajeros con profesionalismo y dedicación."
        image="home"
        compact
      />
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>¿Quiénes Somos?</h2>
            <p>
              TLombardía es una empresa dedicada al transporte de pasajeros,
              ofreciendo servicios de calidad para diferentes necesidades.
            </p>
          </div>
          <ServiceGrid cards={companyCards} />
        </div>
      </section>
      <Stats />
      <Cta
        title="¿Necesitas Nuestros Servicios?"
        text="Contáctanos hoy y descubre por qué somos la opción preferida de miles de clientes."
        primaryLabel="Escribir por WhatsApp"
        secondaryLabel="Contacto Directo"
      />
    </>
  );
}
