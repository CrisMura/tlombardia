import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <span>📞 +56 9 7808 1743</span>
          <span>✉️ contacto@tlombardia.cl</span>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <Link href="/" className="logo">
            Transportes Lombardía<span>.</span>
          </Link>
          <nav className="main-nav">
            <Link href="/">Inicio</Link>
            <Link href="/nuestra-empresa">Nuestra Empresa</Link>
            <Link href="/viajes-especiales">Viajes Especiales</Link>
            <Link href="/transfer-aeropuerto">Transfer Aeropuerto</Link>
            <Link href="/turismo">Turismo</Link>
            <Link href="/trabaja-con-nosotros">Trabaja con Nosotros</Link>
          </nav>
          <div className="header-actions">
            <Link href="https://wa.me/56978081743" target="_blank" className="btn-reserve">
              Reservar Ahora
            </Link>
            <button className="mobile-menu-btn" aria-label="Menú">
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
