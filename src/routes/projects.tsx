import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/section-header";
import { projects, type Project } from "@/lib/data";

const filters = ["All", "Residential", "Commercial", "Agricultural", "Industrial"] as const;
type Filter = (typeof filters)[number];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Solar Installations — 1200+ Projects in Jhansi | Siddhi Vinayak Solar" },
      { name: "description", content: "Browse our completed rooftop, commercial, industrial and agricultural solar installations across Bundelkhand." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");
  const list = useMemo<Project[]>(
    () => (active === "All" ? projects : projects.filter((p) => p.type === active)),
    [active],
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Projects"
        title="1200+ solar installations across Bundelkhand."
        subtitle="A snapshot of the rooftops, farms and factories we've powered."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`h-9 rounded-full px-4 text-xs font-mono font-bold uppercase tracking-widest transition-all ${
                  active === f
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <div key={p.title} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.title} loading="lazy" className="size-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{p.type}</span>
                    <span className="font-display font-extrabold text-ink">{p.size}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
