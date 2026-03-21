import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-image" />
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">Servicios de Transporte Premium</span>
              <h1>Tu Mejor Experiencia de Transporte en Chile</h1>
              <p>Contamos con más de 20 años de experiencia ofreciendo servicios de transfer, turismo y viajes especiales con la más alta calidad y compromiso.</p>
              <div className="hero-buttons">
                <a href="https://wa.me/56978081743" className="btn-hero btn-hero-primary" target="_blank" rel="noreferrer">Cotizar por WhatsApp</a>
                <a href="#servicios" className="btn-hero btn-hero-secondary">Ver Servicios</a>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-links">
          <div className="container">
            <Link href="/nuestra-empresa" className="quick-link"><span className="quick-link-icon">🏢</span>Nuestra Empresa</Link>
            <Link href="/viajes-especiales" className="quick-link"><span className="quick-link-icon">🎉</span>Viajes Especiales</Link>
            <Link href="/transfer-aeropuerto" className="quick-link"><span className="quick-link-icon">✈️</span>Transfer Aeropuerto</Link>
            <Link href="/turismo" className="quick-link"><span className="quick-link-icon">🌄</span>Turismo</Link>
            <Link href="/trabaja-con-nosotros" className="quick-link"><span className="quick-link-icon">💼</span>Trabaja con Nosotros</Link>
          </div>
        </section>

        <section className="services" id="servicios">
          <div className="container">
            <div className="section-header">
              <h2>Nuestros Servicios</h2>
              <p>Ofrecemos soluciones integrales de transporte para diferentes necesidades, con flota moderna y profesionales capacitados.</p>
            </div>
            <div className="services-grid">
              <article className="service-card">
                <div className="service-image">✈️</div>
                <div className="service-content">
                  <h3>Transfer Aeropuerto</h3>
                  <p>Servicio de recogida y traslado al aeropuerto con seguimiento de vuelos y puntualidad garantizada. Disponible las 24 horas.</p>
                  <Link href="/transfer-aeropuerto" className="service-link">Más información →</Link>
                </div>
              </article>
              <article className="service-card">
                <div className="service-image">🎉</div>
                <div className="service-content">
                  <h3>Viajes Especiales</h3>
                  <p>Organización de traslados para eventos, matrimonios, conciertos, convenios empresas y grupos corporativos.</p>
                  <Link href="/viajes-especiales" className="service-link">Más información →</Link>
                </div>
              </article>
              <article className="service-card">
                <div className="service-image">🌄</div>
                <div className="service-content">
                  <h3>Turismo</h3>
                  <p>Rutas turísticas personalizadas, circuitos por Chile, escapadas de fin de semana y viajes para grupos y familias.</p>
                  <Link href="/turismo" className="service-link">Más información →</Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item"><div className="stat-number">+20</div><div className="stat-label">Años de Experiencia</div></div>
              <div className="stat-item"><div className="stat-number">24/7</div><div className="stat-label">Atención Operativa</div></div>
              <div className="stat-item"><div className="stat-number">+500</div><div className="stat-label">Clientes Atendidos</div></div>
              <div className="stat-item"><div className="stat-number">100%</div><div className="stat-label">Compromiso de Servicio</div></div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-box">
              <h2>¿Necesitas una Cotización?</h2>
              <p>Contáctanos por WhatsApp y recibe una respuesta inmediata. Nuestro equipo está disponible las 24 horas para atenderte.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/56978081743" className="btn-cta-white" target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
                <Link href="/trabaja-con-nosotros" className="btn-cta-outline">Contacto Directo</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

