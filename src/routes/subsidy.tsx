import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, IndianRupee } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero, SectionHeader } from "@/components/section-header";
import { subsidySlabs, subsidyProcess } from "@/lib/data";

export const Route = createFileRoute("/subsidy")({
  head: () => ({
    meta: [
      { title: "PM Surya Ghar Muft Bijli Yojana — Up to ₹1,08,000 Solar Subsidy in Jhansi" },
      { name: "description", content: "PM Surya Ghar rooftop solar subsidy in Jhansi UP — up to ₹1,08,000 direct-to-bank. End-to-end application by Siddhi Vinayak Solar." },
      { property: "og:url", content: "/subsidy" },
    ],
    links: [{ rel: "canonical", href: "/subsidy" }],
  }),
  component: SubsidyPage,
});

function SubsidyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="PM Surya Ghar Yojana"
        title="Up to ₹1,08,000 rooftop solar subsidy — credited to your bank."
        subtitle="The Government of India's flagship rooftop solar scheme. We handle the entire application on your behalf."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Subsidy Slabs" title="How much subsidy will you get?" />
          <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr className="text-left">
                  {["System Size", "Approx Cost", "Central Subsidy", "Generation"].map((h) => (
                    <th key={h} className="p-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {subsidySlabs.map((r) => (
                  <tr key={r.size}>
                    <td className="p-4 font-semibold text-ink">{r.size}</td>
                    <td className="p-4 text-muted-foreground">{r.cost}</td>
                    <td className="p-4 font-display font-extrabold text-primary text-lg">{r.subsidy}</td>
                    <td className="p-4 text-muted-foreground">{r.units}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            * Indicative figures. Final subsidy is decided by MNRE at time of disbursal. State subsidy (if any) is additional.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Process" title="6 simple steps — we do the paperwork." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {subsidyProcess.map((s) => (
              <div key={s.step} className="rounded-xl border border-border bg-card p-6">
                <div className="font-display text-4xl font-extrabold text-primary/30">{s.step}</div>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Eligibility" title="Who qualifies?" />
            <ul className="mt-6 space-y-3">
              {[
                "Indian citizen with a residential electricity connection",
                "Rooftop / shadow-free area available for installation",
                "Valid Aadhaar and bank account for direct subsidy credit",
                "Property owned by applicant (or NOC from owner)",
                "System size between 1 kW and 10 kW (residential)",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="size-4 mt-0.5 text-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-solar/10 border border-border p-8 flex flex-col justify-center">
            <IndianRupee className="size-8 text-primary" />
            <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">
              Ready to apply?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Fill a 2-minute application. Our team will call you within 24 hours to schedule a free site survey.
            </p>
            <Link
              to="/apply-subsidy"
              className="mt-6 inline-flex h-12 w-fit items-center gap-2 rounded-md bg-primary px-6 font-semibold text-primary-foreground hover:bg-ink"
            >
              Apply for Subsidy <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
