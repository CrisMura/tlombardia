import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ViajesEspecialesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ height: "400px" }}>
          <div className="hero-image" style={{ background: "url('/img/aeropuerto2.jpeg') center/cover no-repeat" }} />
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">Viajes Especiales</span>
              <h1>Eventos Inolvidables con el Mejor Servicio</h1>
              <p>Organizamos el transporte para tus eventos más importantes: matrimonios, conciertos, convenios empresariales y más.</p>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <div className="section-header">
              <h2>Nuestros Servicios de Viajes Especiales</h2>
              <p>Contamos con flota diversa para adaptarnos a las necesidades de tu evento.</p>
            </div>
            <div className="services-grid">
              <article className="service-card"><div className="service-image">💒</div><div className="service-content"><h3>Matrimonios</h3><p>Servicio de transporte exclusivo para novios, familiares e invitados. Flota de vehículos premium para tu gran día.</p></div></article>
              <article className="service-card"><div className="service-image">🎤</div><div className="service-content"><h3>Conciertos y Eventos</h3><p>Traslado de grupos para eventos musicales, festivales y conferencias. Coordinamos logística para grandes grupos.</p></div></article>
              <article className="service-card"><div className="service-image">🏢</div><div className="service-content"><h3>Convenios Empresas</h3><p>Servicios corporativos: transporte de personal, eventos de empresa, capacitaciones y reuniones fuera de oficina.</p></div></article>
              <article className="service-card"><div className="service-image">🎓</div><div className="service-content"><h3>Graduaciones</h3><p>Celebraciones de graduación con transporte exclusivo para familias y grupos de amigos.</p></div></article>
              <article className="service-card"><div className="service-image">⚽</div><div className="service-content"><h3>Eventos Deportivos</h3><p>Transporte para equipos deportivos, barras y aficionados a eventos competitivos deportivos.</p></div></article>
              <article className="service-card"><div className="service-image">🎄</div><div className="service-content"><h3>Fiestas y Celebraciones</h3><p>Traslado seguro para fiestas de fin de año, cumpleaños y celebraciones familiares.</p></div></article>
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
              <h2>¿Necesitas Cotizar un Viaje Especial?</h2>
              <p>Contáctanos y te entregamos una cotización personalizada para tu evento.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/56978081743" className="btn-cta-white" target="_blank" rel="noreferrer">Cotizar por WhatsApp</a>
                <a href="/trabaja-con-nosotros" className="btn-cta-outline">Formulario de Contacto</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
