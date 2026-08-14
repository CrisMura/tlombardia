import Link from "next/link";
import { navItems, site } from "@/lib/site";

const serviceLinks = navItems.filter((item) =>
  ["transfer-aeropuerto", "viajes-especiales", "turismo"].includes(item.key)
);

const companyLinks = navItems.filter((item) =>
  ["nuestra-empresa", "trabaja-con-nosotros"].includes(item.key)
);

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              Transportes Lombardía<span>.</span>
            </Link>
            <p>
              Empresa de transporte de pasajeros con más de 20 años de experiencia.
              Servicios de transfer aeropuerto, turismo, viajes especiales y eventos corporativos.
            </p>
          </div>
          <div className="footer-links">
            <h2>Servicios</h2>
            {serviceLinks.map((item) => (
              <Link href={item.href} key={item.key}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-links">
            <h2>Empresa</h2>
            {companyLinks.map((item) => (
              <Link href={item.href} key={item.key}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-contact">
            <h2>Contacto</h2>
            <p>Chile</p>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            <a href={`tel:${site.secondaryPhone.replace(/\s/g, "")}`}>{site.secondaryPhone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Transportes Lombardía. Todos los derechos reservados.</span>
        </div>
      </div>
      <a href={site.whatsapp} className="whatsapp-float" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <img src="/img/whatsapp.svg" alt="" width="30" height="30" />
      </a>
    </footer>
  );
}
