import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { site, nav } from "@/lib/data";
import { SiteLogo } from "@/components/site-logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background/90 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <SiteLogo dark />
          <p className="text-sm leading-relaxed text-background/60 max-w-md">
            Government empanelled solar installer in Jhansi. On-grid, off-grid & hybrid rooftop
            systems with end-to-end PM Surya Ghar subsidy assistance up to ₹1,08,000.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["UP NEDA", "DVVNL Approved", "PM Surya Ghar", "Exide Authorized"].map((b) => (
              <span
                key={b}
                className="rounded-full border border-background/15 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-background/60"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            Explore
          </h5>
          <ul className="space-y-2.5 text-sm text-background/70">
            {nav.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary">{l.label}</Link>
              </li>
            ))}
            <li><Link to="/apply-subsidy" className="hover:text-primary">Apply for Subsidy</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            Reach Us
          </h5>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex gap-2">
              <MapPin className="size-4 shrink-0 mt-0.5 text-primary" />
              <span>{site.address}</span>
            </li>
            {site.phones.map((p) => (
              <li key={p} className="flex gap-2">
                <Phone className="size-4 shrink-0 mt-0.5 text-primary" />
                <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-primary">{p}</a>
              </li>
            ))}
            <li className="flex gap-2">
              <Mail className="size-4 shrink-0 mt-0.5 text-primary" />
              <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a>
            </li>
            <li className="flex gap-2">
              <Clock className="size-4 shrink-0 mt-0.5 text-primary" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between gap-3 text-[10px] font-mono uppercase tracking-widest text-background/40">
        <span>© {new Date().getFullYear()} {site.name} — All rights reserved</span>
        <span>Designed and Developed by <a href="https://rewantechsolutions.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Rewantechsolutions</a></span>
      </div>
    </footer>
  );
}
