import { createFileRoute, Link } from "@tanstack/react-router";
import { Sun, Home, Factory, Tractor, Wallet, Wrench, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, SectionHeader } from "@/components/section-header";
import { services } from "@/lib/data";

const icons = { sun: Sun, home: Home, factory: Factory, tractor: Tractor, wallet: Wallet, wrench: Wrench };

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Rooftop, Commercial & Agricultural Solar | Siddhi Vinayak Solar" },
      { name: "description", content: "Rooftop solar, commercial SPGS, industrial plants, solar pumps, atta chakki setup and PM Surya Ghar subsidy assistance in Jhansi." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Every solar service you need, under one roof."
        subtitle="From a 1 kW home rooftop to a 500 kW industrial plant — we design, install, service and handle the subsidy paperwork."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = icons[s.icon];
              return (
                <div key={s.title} className="group rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                  <div className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeader eyebrow="Ready to start" title="Book a free site survey today." align="center" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex h-12 items-center rounded-md bg-primary px-6 font-semibold text-primary-foreground hover:bg-ink">
              Contact Us
            </Link>
            <Link to="/apply-subsidy" className="inline-flex h-12 items-center gap-2 rounded-md border border-input bg-card px-6 font-semibold text-ink hover:bg-accent">
              Apply for Subsidy <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
