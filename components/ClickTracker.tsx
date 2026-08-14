"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ClickTracker() {
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a, button") as HTMLAnchorElement | HTMLButtonElement | null;

      if (!link || typeof window.gtag !== "function") {
        return;
      }

      const href = link instanceof HTMLAnchorElement ? link.href : "";
      const isLead =
        href.includes("wa.me") ||
        href.startsWith("mailto:") ||
        link.classList.contains("btn-cta-white") ||
        link.classList.contains("btn-cta-outline") ||
        link.classList.contains("btn-reserve") ||
        link.classList.contains("service-link");

      if (!isLead) {
        return;
      }

      window.gtag("event", href.startsWith("mailto:") ? "generate_lead" : "click_contact", {
        event_category: "engagement",
        event_label: href || link.textContent?.trim() || "cta",
        page_path: pathname
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
