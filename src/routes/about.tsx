import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Award, Users, Target } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, SectionHeader } from "@/components/section-header";
import { site, trustBadges, stats } from "@/lib/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Siddhi Vinayak Solar Solutions Jhansi" },
      { name: "description", content: "Government empanelled solar installer serving Jhansi & Bundelkhand since 2015. UP NEDA, DVVNL and PM Surya Ghar registered." },
      { property: "og:title", content: "About Siddhi Vinayak Solar" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Powering Jhansi with reliable, subsidised solar since 2015."
        subtitle="Siddhi Vinayak Solar Solutions is a government empanelled installer specialising in on-grid, off-grid and hybrid rooftop solar for homes, farms and industry across Bundelkhand."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-14 md:grid-cols-2 items-start">
          <img
            src={site.images.facility}
            alt="Siddhi Vinayak Solar office in Jhansi"
            className="w-full aspect-[4/5] object-cover rounded-2xl shadow-[var(--shadow-elegant)]"
          />
          <div>
            <SectionHeader eyebrow="Our Story" title="A trusted local partner, not a call-centre installer." />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in Jhansi with one goal — bring premium, subsidised solar to every rooftop in Bundelkhand.
              From a small showroom on Galla Mandi Road, we've grown into a government empanelled vendor
              trusted by 1200+ households, farmers, schools and small industries.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We only install Tier-1 modules from Tata, Adani and Waaree with Made-in-India inverters.
              Every installation is designed by our in-house engineers and backed by a 5-year workmanship warranty.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.l} className="rounded-lg border border-border bg-card p-5">
                  <div className="font-display text-2xl font-extrabold text-primary">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground uppercase tracking-widest font-mono">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Mission" title="Solar for every rooftop in Bundelkhand." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", body: "Make clean energy accessible, affordable and subsidy-driven for every home and farm in Bundelkhand." },
              { icon: Award, title: "Our Standard", body: "Only Tier-1 equipment, MNRE approved panels, and Made-in-India inverters — no shortcuts, no compromises." },
              { icon: Users, title: "Our Team", body: "Certified electricians, in-house engineers and dedicated liaison staff for subsidy paperwork." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6">
                <div className="size-11 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader eyebrow="Trust & Certifications" title="Recognised by the government. Trusted by 1200+ customers." align="center" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {trustBadges.map((b) => (
              <div key={b} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                <span className="font-semibold text-ink text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
