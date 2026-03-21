import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TurismoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ height: "400px" }}>
          <div className="hero-image" style={{ background: "url('/img/index1.jpeg') center/cover no-repeat" }} />
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">Turismo</span>
              <h1>Descubre Chile con Nosotros</h1>
              <p>Rutas turísticas personalizadas, circuitos y escapadas. Vive experiencias únicas junto a tu familia o grupo de amigos.</p>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <div className="section-header">
              <h2>Servicios Turísticos</h2>
              <p>Te llevamos a los mejores destinos de Chile con comodidad y seguridad.</p>
            </div>
            <div className="services-grid">
              <article className="service-card"><div className="service-image">🏔️</div><div className="service-content"><h3>Circuitos Turísticos</h3><p>Rutas pre-diseñadas por los destinos más hermosos de Chile. Incluye transporte y guía especializado.</p></div></article>
              <article className="service-card"><div className="service-image">🏖️</div><div className="service-content"><h3>Escapadas a la Costa</h3><p>Viajes a las mejores playas y balnearios. Disfruta del mar con la comodidad de transporte incluido.</p></div></article>
              <article className="service-card"><div className="service-image">🍇</div><div className="service-content"><h3>Rutas Vinícolas</h3><p>Tour por los valles viñateros de Chile. Visita las mejores bodegas con traslado exclusivo.</p></div></article>
              <article className="service-card"><div className="service-image">🌲</div><div className="service-content"><h3>Turismo Aventura</h3><p>Viajes a destinos de naturaleza y aventura. Sky, trekking, kayak y más actividades.</p></div></article>
              <article className="service-card"><div className="service-image">🏛️</div><div className="service-content"><h3>Tours Culturales</h3><p>Rutas por ciudades patrimoniales, museos y lugares históricos de Chile.</p></div></article>
              <article className="service-card"><div className="service-image">👨‍👩‍👧‍👦</div><div className="service-content"><h3>Viajes Familiares</h3><p>Paquetes diseñados para familias. Seguridad, comodidad y entretenimiento para todos.</p></div></article>
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
              <h2>Planifica tu Próxima Aventura</h2>
              <p>Contáctanos y te ayudamos a planificar el viaje turístico perfecto para ti.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/56978081743" className="btn-cta-white" target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
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
