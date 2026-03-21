import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NuestraEmpresaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ height: "400px" }}>
          <div className="hero-image" style={{ background: "url('/img/aeropuerto1.jpeg') center/cover no-repeat" }} />
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">Nuestra Empresa</span>
              <h1>Compromiso y Calidad en Cada Viaje</h1>
              <p>Más de 20 años ofreciendo servicios de transporte de pasajeros con professionalism y dedicación.</p>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <div className="section-header">
              <h2>¿Quiénes Somos?</h2>
              <p>TLombardía es una empresa dedicada al transporte de pasajeros, ofreciendo servicios de calidad para diferentes necesidades.</p>
            </div>
            <div className="services-grid">
              <article className="service-card"><div className="service-content"><h3>Misión</h3><p>Brindar servicios de transporte de pasajeros con los más altos estándares de calidad, seguridad y puntualidad, superando las expectativas de nuestros clientes en cada viaje.</p></div></article>
              <article className="service-card"><div className="service-content"><h3>Visión</h3><p>Ser la empresa de transporte de pasajeros líder en la región, reconocida por su compromiso, profesionalismo y innovación en el servicio.</p></div></article>
              <article className="service-card"><div className="service-content"><h3>Valores</h3><p>Compromiso, puntualidad, seguridad, profesionalismo y atención personalizada son los pilares que guían nuestra operación diaria.</p></div></article>
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
              <h2>¿Necesitas Nuestros Servicios?</h2>
              <p>Contáctanos hoy y descubre por qué somos la opción preferida de miles de clientes.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/56978081743" className="btn-cta-white" target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
                <a href="/trabaja-con-nosotros" className="btn-cta-outline">Contacto Directo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
