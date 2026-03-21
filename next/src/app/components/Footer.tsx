export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="logo">Transportes Lombardía<span>.</span></a>
            <p>Empresa de transporte de pasajeros con más de 20 años de experiencia. Servicios de transfer aeropuerto, turismo, viajes especiales y eventos corporativos.</p>
          </div>
          <div className="footer-links">
            <h4>Servicios</h4>
            <a href="/transfer-aeropuerto">Transfer Aeropuerto</a>
            <a href="/viajes-especiales">Viajes Especiales</a>
            <a href="/turismo">Turismo</a>
          </div>
          <div className="footer-links">
            <h4>Empresa</h4>
            <a href="/nuestra-empresa">Nuestra Empresa</a>
            <a href="/trabaja-con-nosotros">Trabaja con Nosotros</a>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>📍 Chile</p>
            <p>📞 +56 9 7808 1743</p>
            <p>📞 +56 32 311 6941</p>
            <p>✉️ contacto@tlombardia.cl</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Transportes Lombardía. Todos los derechos reservados.</span>
        </div>
      </div>
      <a href="https://wa.me/56978081743" className="whatsapp-float" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>
    </footer>
  );
}
