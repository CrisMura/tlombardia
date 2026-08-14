import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Stats } from "@/components/Stats";
import { jobsCards, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/trabaja-con-nosotros/" },
  title: "Trabaja con Nosotros",
  description:
    "Postula a Transportes Lombardía. Buscamos profesionales para sumarse a nuestro equipo de transporte en Chile.",
  openGraph: {
    title: "Trabaja con Nosotros | Transportes Lombardía",
    description: "Postula a nuestro equipo y conoce oportunidades laborales en transporte de pasajeros.",
    url: "/trabaja-con-nosotros/",
    images: ["/img/convenio_emp-1200.jpg"]
  },
  twitter: {
    title: "Trabaja con Nosotros | Transportes Lombardía",
    description: "Postula a nuestro equipo y conoce oportunidades laborales en transporte de pasajeros.",
    images: ["/img/convenio_emp-1200.jpg"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Postulaciones abiertas - Transportes Lombardía",
  hiringOrganization: {
    "@type": "Organization",
    name: site.name,
    sameAs: `${site.url}/`
  },
  employmentType: "FULL_TIME",
  jobLocationType: "ON_SITE",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "CL"
  },
  url: `${site.url}/trabaja-con-nosotros/`
};

export default function TrabajaConNosotrosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        badge="Trabaja con Nosotros"
        title="Únete a Nuestro Equipo"
        text="Estamos buscando profesionales comprometidos para ofrecer el mejor servicio de transporte."
        image="convenio"
        compact
      />
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>¿Por Qué Trabajar con Nosotros?</h2>
            <p>En TLombardía valoramos a nuestros colaboradores y ofrecemos excelentes condiciones laborales.</p>
          </div>
          <ServiceGrid cards={jobsCards} />
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <h2>Envía tu Currículum</h2>
            <p>Completa el formulario y nos pondremos en contacto contigo.</p>
          </div>
          <div className="form-wrap">
            <form className="contact-form" action={`mailto:${site.email}`} method="post" encType="text/plain">
              <div className="field">
                <label htmlFor="nombre">Nombre Completo</label>
                <input id="nombre" name="Nombre" type="text" placeholder="Tu nombre" required />
              </div>
              <div className="field">
                <label htmlFor="telefono">Teléfono</label>
                <input id="telefono" name="Telefono" type="tel" placeholder="+56 9 XXXX XXXX" required />
              </div>
              <div className="field">
                <label htmlFor="email">Correo Electrónico</label>
                <input id="email" name="Email" type="email" placeholder="tu@email.com" required />
              </div>
              <div className="field">
                <label htmlFor="cargo">Cargo de Interés</label>
                <select id="cargo" name="Cargo" defaultValue="" required>
                  <option value="" disabled>
                    Selecciona un cargo
                  </option>
                  <option>Conductor de Van</option>
                  <option>Conductor de Bus</option>
                  <option>Guía Turístico</option>
                  <option>Atención al Cliente</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="Mensaje" placeholder="Cuéntanos sobre tu experiencia..." />
              </div>
              <button type="submit" className="btn-hero submit-button">
                Enviar Currículum
              </button>
            </form>
          </div>
        </div>
      </section>
      <Stats />
      <Cta
        title="¿Tienes Preguntas?"
        text="Contáctanos directamente para resolver cualquier duda sobre nuestras vacantes."
        primaryLabel="Escribir por WhatsApp"
        secondaryLabel="Enviar Email"
        secondaryHref={`mailto:${site.email}`}
      />
    </>
  );
}
