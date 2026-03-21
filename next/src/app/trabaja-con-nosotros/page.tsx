import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TrabajaConNosotrosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ height: "400px" }}>
          <div className="hero-image" style={{ background: "url('/img/index1.jpeg') center/cover no-repeat" }} />
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">Trabaja con Nosotros</span>
              <h1>Únete a Nuestro Equipo</h1>
              <p>Estamos buscando profesionales comprometidos para ofrecer el mejor servicio de transporte.</p>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <div className="section-header">
              <h2>¿Por Qué Trabajar con Nosotros?</h2>
              <p>En TLombardía valoramos a nuestros colaboradores y ofrecemos excelentes condiciones laborales.</p>
            </div>
            <div className="services-grid">
              <article className="service-card"><div className="service-image">💰</div><div className="service-content"><h3>Competitivos Sueldos</h3><p>Ofrecemos remuneraciones atractivas y puntuales. Tu trabajo merece una recompensa justa.</p></div></article>
              <article className="service-card"><div className="service-image">📅</div><div className="service-content"><h3>Flexibilidad de Horarios</h3><p>Adaptamos los turnos a tus necesidades. Balance entre trabajo y vida personal.</p></div></article>
              <article className="service-card"><div className="service-image">🚗</div><div className="service-content"><h3>Flota Moderna</h3><p>Trabajamos con vehículos nuevos y bien mantenidos. Comodidad y seguridad garantizada.</p></div></article>
              <article className="service-card"><div className="service-image">📈</div><div className="service-content"><h3> Oportunidades de Crecimiento</h3><p>Promovemos el desarrollo profesional dentro de la empresa. Ascensos y capacitación.</p></div></article>
              <article className="service-card"><div className="service-image">👥</div><div className="service-content"><h3>Buen Ambiente Laboral</h3><p>Equipo de trabajo colaborativo y respetuoso. Nos preocupamos por el bienestar de todos.</p></div></article>
              <article className="service-card"><div className="service-image">🛡️</div><div className="service-content"><h3>Beneficios y Seguros</h3><p>Contamos con seguros y beneficios adicionales para nuestros colaboradores.</p></div></article>
            </div>
          </div>
        </section>

        <section className="services" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="section-header">
              <h2>Envía tu Currículum</h2>
              <p>Completa el formulario y nos pondremos en contacto contigo.</p>
            </div>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <form className="service-card" style={{ padding: "30px" }}>
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: 600, color: "var(--text)" }}>Nombre Completo</label>
                  <input type="text" placeholder="Tu nombre" style={{ width: "100%", padding: "12px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem" }} />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: 600, color: "var(--text)" }}>Teléfono</label>
                  <input type="tel" placeholder="+56 9 XXXX XXXX" style={{ width: "100%", padding: "12px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem" }} />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: 600, color: "var(--text)" }}>Correo Electrónico</label>
                  <input type="email" placeholder="tu@email.com" style={{ width: "100%", padding: "12px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem" }} />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: 600, color: "var(--text)" }}>Cargo de Interés</label>
                  <select style={{ width: "100%", padding: "12px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", background: "white" }}>
                    <option>Selecciona un cargo</option>
                    <option>Conductor de Van</option>
                    <option>Conductor de Bus</option>
                    <option>Guía Turístico</option>
                    <option>Atención al Cliente</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: 600, color: "var(--text)" }}>Mensaje (Experiencia)</label>
                  <textarea rows={4} placeholder="Cuéntanos sobre tu experiencia..." style={{ width: "100%", padding: "12px", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "1rem", resize: "vertical" }} />
                </div>
                <button type="submit" className="btn-hero btn-hero-primary" style={{ width: "100%", border: "none", cursor: "pointer" }}>
                  Enviar Currículum
                </button>
              </form>
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
              <h2>¿Tienes Preguntas?</h2>
              <p>Contáctanos directamente para resolver cualquier duda sobre nuestras vacantes.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/56978081743" className="btn-cta-white" target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
                <a href="mailto:contacto@tlombardia.cl" className="btn-cta-outline">Enviar Email</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
