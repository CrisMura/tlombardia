import Link from "next/link";
import { site } from "@/lib/site";

type CtaProps = {
  title: string;
  text: string;
  primaryLabel: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  primaryHref?: string;
};

export function Cta({
  title,
  text,
  primaryLabel,
  secondaryLabel,
  primaryHref = site.whatsapp,
  secondaryHref = "/contacto/"
}: CtaProps) {
  const primaryExternal = primaryHref.startsWith("http") || primaryHref.startsWith("mailto:");
  const secondaryExternal = secondaryHref.startsWith("http") || secondaryHref.startsWith("mailto:");

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta-buttons">
            {primaryExternal ? (
              <a href={primaryHref} className="btn-cta-white" target="_blank" rel="noreferrer">
                {primaryLabel}
              </a>
            ) : (
              <Link href={primaryHref} className="btn-cta-white">
                {primaryLabel}
              </Link>
            )}
            {secondaryLabel ? (
              secondaryExternal ? (
                <a href={secondaryHref} className="btn-cta-outline">
                  {secondaryLabel}
                </a>
              ) : (
                <Link href={secondaryHref} className="btn-cta-outline">
                  {secondaryLabel}
                </Link>
              )
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
