import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, SectionHeader } from "@/components/section-header";
import { solarSystems } from "@/lib/data";

export const Route = createFileRoute("/solar-systems")({
  head: () => ({
    meta: [
      { title: "On-Grid, Off-Grid & Hybrid Solar Systems — Siddhi Vinayak Solar Jhansi" },
      { name: "description", content: "Compare On-Grid, Off-Grid and Hybrid solar systems. Understand cost, battery backup and PM Surya Ghar eligibility. Installed in Jhansi UP." },
      { property: "og:url", content: "/solar-systems" },
    ],
    links: [{ rel: "canonical", href: "/solar-systems" }],
  }),
  component: SolarSystemsPage,
});

function SolarSystemsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Solar Systems"
        title="On-Grid, Off-Grid or Hybrid — pick what fits your rooftop."
        subtitle="Three system types, one goal: reliable clean power. Compare costs, backup and payback below."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-16">
          {solarSystems.map((s, i) => (
            <div
              key={s.slug}
              className={`grid gap-10 lg:grid-cols-2 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <img
                src={s.image}
                alt={s.name}
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-[var(--shadow-elegant)]"
                loading="lazy"
              />
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                  [ {s.short} ]
                </span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight text-ink text-balance">
                  {s.name}
                </h2>
                <p className="mt-4 text-muted-foreground">{s.description}</p>

                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="size-4 mt-0.5 text-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-6 rounded-xl border border-border bg-card p-5">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Best for</div>
                    <div className="mt-1 font-semibold text-ink">{s.bestFor}</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Starting at</div>
                    <div className="font-display text-2xl font-extrabold text-primary">{s.priceFrom}</div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-ink"
                >
                  Get a quote <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader eyebrow="Compare" title="Quick comparison" align="center" />
          <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr className="text-left">
                  {["Feature", "On-Grid", "Off-Grid", "Hybrid"].map((h) => (
                    <th key={h} className="p-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Battery backup", "No", "Yes", "Yes"],
                  ["Works during power cut", "No", "Yes", "Yes"],
                  ["Export to grid", "Yes", "No", "Yes"],
                  ["Subsidy eligible", "Yes", "Limited", "Yes"],
                  ["Ideal for", "Cities", "Villages", "Premium homes"],
                ].map((r) => (
                  <tr key={r[0]}>
                    {r.map((c, i) => (
                      <td key={i} className={`p-4 ${i === 0 ? "font-semibold text-ink" : "text-muted-foreground"}`}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
