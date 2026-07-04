import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, SectionHeader } from "@/components/section-header";
import { brands } from "@/lib/data";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Partner Brands — Tata, Adani, Waaree, Luminous | Siddhi Vinayak Solar" },
      { name: "description", content: "Authorised installer for Tata Power Solar, Adani Solar, Waaree, Luminous, Exide, UTL, Microtek, Havells and more." },
      { property: "og:url", content: "/brands" },
    ],
    links: [{ rel: "canonical", href: "/brands" }],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Partner Brands"
        title="We install only Tier-1, MNRE-approved equipment."
        subtitle="Every panel, inverter and battery we install comes from a recognised OEM with full warranty support."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Our OEMs" title="Trusted Indian & global manufacturers." />
          <div className="mt-12 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((b) => (
              <div
                key={b.name}
                className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-8 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Sparkles className="size-6" />
                </div>
                <div className="mt-2 font-display font-extrabold text-ink text-base">{b.name}</div>
                <div className="text-xs text-muted-foreground">{b.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeader
            eyebrow="Warranty"
            title="25 years on panels · 5–10 years on inverters · 5 years workmanship."
            align="center"
          />
          <p className="mt-4 text-muted-foreground">
            Original OEM warranty cards handed over on commissioning. We coordinate all warranty claims directly with the manufacturer.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
