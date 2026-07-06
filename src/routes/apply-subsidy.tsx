import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/section-header";
import { EnquiryForm } from "@/components/enquiry-form";
import { subsidySlabs, site } from "@/lib/data";

export const Route = createFileRoute("/apply-subsidy")({
  head: () => ({
    meta: [
      { title: "Apply for PM Surya Ghar Subsidy — Up to ₹1,08,000 | Siddhi Vinayak Solar" },
      { name: "description", content: "Apply for PM Surya Ghar rooftop solar subsidy in Jhansi. End-to-end application handled by Siddhi Vinayak Solar." },
      { property: "og:url", content: "/apply-subsidy" },
    ],
    links: [{ rel: "canonical", href: "/apply-subsidy" }],
  }),
  component: ApplySubsidyPage,
});

function ApplySubsidyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Apply Now"
        title="Apply for PM Surya Ghar subsidy in 2 minutes."
        subtitle="Fill the form. Our team calls within 24 hours, does a free site survey and files your subsidy application."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-2xl bg-card border border-border p-6 md:p-8">
            <h2 className="font-display text-2xl font-extrabold text-ink">Subsidy Application</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              All fields marked * are required. Your details are stored securely and never shared.
            </p>
            <div className="mt-6">
              <EnquiryForm
                storageKey="svs_subsidy_leads"
                submitLabel="Submit Application"
                defaultInterest="PM Surya Ghar Subsidy"
                formType="Apply for Subsidy"
                formspreeUrl={site.formspreeSubsidy}
                interests={["1 kW System", "2 kW System", "3 kW System", "5 kW System", "Not sure — advise me"]}
              />
            </div>
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-solar/10 p-6">
              <h3 className="font-display text-xl font-extrabold text-ink">You could get up to</h3>
              <div className="mt-2 font-display text-5xl font-extrabold text-primary">₹1,08,000</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Central subsidy credited directly to your bank under PM Surya Ghar Muft Bijli Yojana.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold text-ink">Documents needed</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  "Aadhaar Card",
                  "PAN Card",
                  "Recent electricity bill (DVVNL)",
                  "Bank passbook / cancelled cheque",
                  "Passport-size photo",
                ].map((d) => (
                  <li key={d} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 mt-0.5 text-primary shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold text-ink">Subsidy at a glance</h3>
              <div className="mt-4 space-y-2 text-sm">
                {subsidySlabs.map((s) => (
                  <div key={s.size} className="flex justify-between border-b border-border py-2 last:border-0">
                    <span className="text-muted-foreground">{s.size}</span>
                    <span className="font-semibold text-primary">{s.subsidy}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
