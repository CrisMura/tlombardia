import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/Analytics";
import { ClickTracker } from "@/components/ClickTracker";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: "Transportes Lombardía | Transfer Aeropuerto, Turismo y Viajes Especiales",
    template: "%s | Transportes Lombardía"
  },
  description:
    "Servicio de transporte de pasajeros en Chile: transfer al aeropuerto, turismo y viajes especiales. Atención 24/7 con experiencia y puntualidad.",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "es_CL",
    images: ["/img/index1-1200.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/img/index1-1200.jpg"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <ClickTracker />
        <ScrollToTop />
      </body>
    </html>
  );
}
