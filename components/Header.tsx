"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <div className="header-main">
        <div className="container header-main-inner">
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            Transportes Lombardía<span>.</span>
          </Link>
          <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.key}
                className={isActive(pathname, item.href) ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <a href={site.whatsapp} className="btn-reserve" target="_blank" rel="noreferrer">
              Reservar
            </a>
            <button
              className="mobile-menu-btn"
              type="button"
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
