import { useEffect } from "react";

const SELECTOR = [
  "main section",
  ".reveal-card",
  ".reveal-item",
  "main article",
  "main form",
  "main section .rounded-xl",
  "main section .rounded-lg",
  "main section details",
].join(", ");

export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));

    elements.forEach((el, index) => {
      el.classList.add("reveal-on-scroll");
      if (!el.style.getPropertyValue("--reveal-delay")) {
        el.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
      }
    });

    if (reduceMotion) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
