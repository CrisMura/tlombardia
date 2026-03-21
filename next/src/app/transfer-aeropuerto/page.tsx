import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TransferAeropuertoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ height: "400px" }}>
          <div className="hero-image" style={{ background: "url('/img/aeropuerto1.jpeg') center/cover no-repeat" }} />
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">Transfer Aeropuerto</span>
              <h1>Llegada y Salida Sin Preocupaciones</h1>
              <p>Servicio de transfer al aeropuerto con seguimiento de vuelos, puntualidad garantizada y atención las 24 horas.</p>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <div className="section-header">
              <h2>Servicio de Transfer Aeropuerto</h2>
              <p>Nos encargamos de que llegues a tiempo a tu vuelo o que te esperemos a tu llegada.</p>
            </div>
            <div className="services-grid">
              <article className="service-card"><div className="service-image">🛫</div><div className="service-content"><h3>Traslado al Aeropuerto</h3><p>Te llevamos desde tu hotel, casa o oficina directamente a la terminal del aeropuerto. Llega sin estrés.</p></div></article>
              <article className="service-card"><div className="service-image">🛬</div><div className="service-content"><h3>Recogida en Aeropuerto</h3><p>Te esperamos en la arrivals con un cartel a tu nombre. Traslado cómodo hacia tu destino final.</p></div></article>
              <article className="service-card"><div className="service-image">✈️</div><div className="service-content"><h3>Seguimiento de Vuelos</h3><p>Monitoreamos tu vuelo en tiempo real para ajustar la hora de recogida y evitar esperas innecesarias.</p></div></article>
              <article className="service-card"><div className="service-image">⏰</div><div className="service-content"><h3>Puntualidad Garantizada</h3><p>Calculamos el tiempo necesario para que llegues con tranquilidad a tu vuelo. Tu tiempo es importante.</p></div></article>
              <article className="service-card"><div className="service-image">👨‍👩‍👧‍👦</div><div className="service-content"><h3>Grupos y Familias</h3><p>Flota de vans y buses para familias numerosas o grupos. Equipaje incluido en el servicio.</p></div></article>
              <article className="service-card"><div className="service-image">🕐</div><div className="service-content"><h3>Atención 24/7</h3><p>Servicio disponible todos los días del año, incluyendo festivos y horarios nocturnos.</p></div></article>
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
              <h2>Reserva tu Transfer al Aeropuerto</h2>
              <p>Contáctanos con anticipación y asegura tu traslado. Te esperamos.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/56978081743" className="btn-cta-white" target="_blank" rel="noreferrer">Reservar por WhatsApp</a>
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
