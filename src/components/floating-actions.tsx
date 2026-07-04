import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/data";

export function FloatingActions() {
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi Siddhi Vinayak Solar, I'd like a free quote for rooftop solar.",
  )}`;
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex size-14 items-center justify-center rounded-full bg-[oklch(0.72_0.17_150)] text-white shadow-lg shadow-black/20 transition-all hover:scale-110"
      >
        <MessageCircle className="size-6" strokeWidth={2.2} />
        <span className="absolute inline-flex size-14 animate-ping rounded-full bg-[oklch(0.72_0.17_150)] opacity-30" />
      </a>
      <a
        href={`tel:${site.primaryPhone}`}
        aria-label="Call now"
        className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/20 transition-all hover:scale-110"
      >
        <Phone className="size-5" strokeWidth={2.4} />
      </a>
    </div>
  );
}
