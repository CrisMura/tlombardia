import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Stats } from "@/components/Stats";
import { homeServices, navItems, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Transfer Aeropuerto, Turismo y Viajes Especiales",
  description:
    "Servicio de transporte de pasajeros en Chile: transfer al aeropuerto, turismo y viajes especiales. Atención 24/7 con experiencia y puntualidad.",
  openGraph: {
    title: "Transportes Lombardía | Transfer Aeropuerto, Turismo y Viajes Especiales",
    description:
      "Servicio de transporte de pasajeros en Chile: transfer al aeropuerto, turismo y viajes especiales. Atención 24/7.",
    url: "/",
    images: ["/img/index1-1200.jpg"]
  },
  twitter: {
    title: "Transportes Lombardía | Transfer Aeropuerto, Turismo y Viajes Especiales",
    description:
      "Servicio de transporte de pasajeros en Chile: transfer al aeropuerto, turismo y viajes especiales. Atención 24/7.",
    images: ["/img/index1-1200.jpg"]
  }
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: `${site.url}/`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL"
    },
    sameAs: [site.whatsapp]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: `${site.url}/`
  }
];

const quickLinks = navItems.filter((item) => item.key !== "inicio");

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        badge="Servicios de Transporte Premium"
        title="Tu Mejor Experiencia de Transporte en Chile"
        text="Contamos con más de 20 años de experiencia ofreciendo servicios de transfer, turismo y viajes especiales con calidad, compromiso y puntualidad."
        image="home"
      >
        <div className="hero-buttons">
          <a href={site.whatsapp} className="btn-hero btn-hero-primary" target="_blank" rel="noreferrer">
            Cotizar por WhatsApp
          </a>
          <Link href="#servicios" className="btn-hero btn-hero-secondary">
            Ver Servicios
          </Link>
        </div>
      </Hero>

      <section className="quick-links" aria-label="Accesos rápidos">
        <div className="container">
          {quickLinks.map((item) => (
            <Link href={item.href} className="quick-link" key={item.key}>
              <span className="quick-link-icon" aria-hidden="true">
                {item.label.slice(0, 2).toUpperCase()}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Servicios</h2>
            <p>
              Ofrecemos soluciones integrales de transporte para diferentes necesidades,
              con flota moderna y profesionales capacitados.
            </p>
          </div>
          <ServiceGrid cards={homeServices} />
        </div>
      </section>

      <Stats />
      <Cta
        title="¿Necesitas una Cotización?"
        text="Contáctanos por WhatsApp y recibe una respuesta inmediata. Nuestro equipo está disponible las 24 horas para atenderte."
        primaryLabel="Escribir por WhatsApp"
        secondaryLabel="Contacto Directo"
      />
    </>
  );
}
