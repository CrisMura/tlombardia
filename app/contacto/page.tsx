import type { Metadata } from "next";
import { BriefcaseBusiness, Mail, MessageCircle, Phone } from "lucide-react";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contacto/" },
  title: "Contacto",
  description:
    "Contacta a Transportes Lombardia por WhatsApp, email o telefono para cotizar servicios de transporte, turismo y viajes especiales.",
  openGraph: {
    title: "Contacto | Transportes Lombardia",
    description: "Cotiza y contacta a Transportes Lombardia por WhatsApp, email o telefono.",
    url: "/contacto/",
    images: ["/img/convenio_emp-1200.jpg"]
  },
  twitter: {
    title: "Contacto | Transportes Lombardia",
    description: "Cotiza y contacta a Transportes Lombardia por WhatsApp, email o telefono.",
    images: ["/img/convenio_emp-1200.jpg"]
  }
};

const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;
const secondaryPhoneHref = `tel:${site.secondaryPhone.replace(/\s/g, "")}`;
const emailHref = `mailto:${site.email}`;
const jobsEmailHref = `mailto:${site.jobsEmail}?subject=Postulacion%20Transportes%20Lombardia`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto",
  url: `${site.url}/contacto/`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: site.name,
    telephone: site.phone,
    email: site.email,
    url: `${site.url}/`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.phone,
        email: site.email,
        areaServed: "CL",
        availableLanguage: "es"
      }
    ]
  }
};

export default function ContactoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        badge="Contacto"
        title="Hablemos de tu Próximo Traslado"
        text="Estamos disponibles para ayudarte a cotizar servicios de transfer, turismo, eventos y viajes especiales. Escríbenos por WhatsApp, email o teléfono."
        image="convenio"
        compact
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Canales de Contacto</h2>
            <p>Elige el canal que prefieras y nuestro equipo te responderá a la brevedad.</p>
          </div>
          <div className="contact-grid">
            <a href={site.whatsapp} className="contact-card contact-card-primary" target="_blank" rel="noreferrer">
              <span className="contact-card-icon" aria-hidden="true">
                <MessageCircle />
              </span>
              <span className="contact-card-label">WhatsApp</span>
              <strong>Cotiza o agenda tu servicio</strong>
              <span>Respuesta rápida para traslados, turismo y viajes especiales.</span>
            </a>
            <a href={emailHref} className="contact-card">
              <span className="contact-card-icon" aria-hidden="true">
                <Mail />
              </span>
              <span className="contact-card-label">Email</span>
              <strong>{site.email}</strong>
              <span>Ideal para solicitudes con detalle, convenios o coordinación de grupos.</span>
            </a>
            <div className="contact-card">
              <span className="contact-card-icon" aria-hidden="true">
                <Phone />
              </span>
              <span className="contact-card-label">Teléfonos</span>
              <a href={phoneHref}>{site.phone}</a>
              <a href={secondaryPhoneHref}>{site.secondaryPhone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container contact-work">
          <div>
            <span className="contact-work-icon" aria-hidden="true">
              <BriefcaseBusiness />
            </span>
          </div>
          <div>
            <h2>¿Quieres Trabajar con Nosotros?</h2>
            <p>
              Si te interesa sumarte a Transportes Lombardia, envíanos tu CV o una breve presentación por email.
              Incluye tu experiencia, disponibilidad y el cargo o área de interés.
            </p>
            <p className="contact-work-apply">
              Envíanos tu postulación al mail <a href={jobsEmailHref}>{site.jobsEmail}</a>
            </p>
          </div>
        </div>
      </section>

      <Cta
        title="¿Necesitas una Respuesta Rápida?"
        text="Para cotizaciones o coordinación inmediata, WhatsApp es el canal más directo."
        primaryLabel="Escribir por WhatsApp"
      />
    </>
  );
}
