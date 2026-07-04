import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/data";
import { SiteLogo } from "@/components/site-logo";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex h-9 items-center justify-between bg-ink text-background/80 px-6 text-xs">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-solar">
            ⚡ Govt Empanelled · PM Surya Ghar Registered · UP NEDA Approved
          </span>
          <a href={`tel:${site.primaryPhone}`} className="flex items-center gap-2 hover:text-solar">
            <Phone className="size-3.5" /> {site.phones[0]}
          </a>
        </div>
      </div>

      <nav className="sticky top-0 z-30 border-b border-primary/10 bg-background/92 shadow-[0_8px_30px_-24px_oklch(0.16_0.07_210/0.45)] backdrop-blur-xl">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6">
          <SiteLogo />

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {nav.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="relative text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-solar after:transition-all hover:after:w-full [&.active]:text-ink [&.active]:font-semibold [&.active]:after:w-full"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/apply-subsidy"
              className="inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-ink hover:shadow-md"
            >
              Apply for Subsidy
            </Link>
          </div>

          <button
            className="lg:hidden rounded-md border border-border bg-card p-2 text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background px-6 py-4 space-y-3">
            {nav.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/apply-subsidy"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground"
            >
              Apply for Subsidy
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
