import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/section-header";
import { EnquiryForm } from "@/components/enquiry-form";
import { site } from "@/lib/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Siddhi Vinayak Solar Solutions Jhansi" },
      { name: "description", content: "Call, WhatsApp or visit our Jhansi office for free solar site survey and subsidy quote." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in Touch"
        title="Free site survey · Free quote · Free subsidy assistance."
        subtitle="Our team responds within 24 hours. Call, WhatsApp or fill the form below."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <ContactCard icon={<MapPin className="size-5" />} title="Office">
              {site.address}
            </ContactCard>
            <div className="grid gap-4 sm:grid-cols-1">
              {site.phones.map((p) => (
                <ContactCard key={p} icon={<Phone className="size-5" />} title="Call / WhatsApp">
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-primary">{p}</a>
                </ContactCard>
              ))}
            </div>
            <ContactCard icon={<Mail className="size-5" />} title="Email">
              <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a>
            </ContactCard>
            <ContactCard icon={<Clock className="size-5" />} title="Working Hours">
              {site.hours}
            </ContactCard>
            <a
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl border border-border"
            >
              <iframe
                src="https://www.google.com/maps?q=Jhansi+Uttar+Pradesh&output=embed"
                className="w-full aspect-video border-0"
                loading="lazy"
                title="Siddhi Vinayak Solar location"
              />
            </a>
          </div>

          <div className="lg:col-span-3 rounded-2xl bg-card border border-border p-6 md:p-8">
            <h2 className="font-display text-2xl font-extrabold text-ink">Send an enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill this form and our engineer will call you back within 24 hours with a custom quote.
            </p>
            <div className="mt-6">
              <EnquiryForm storageKey="svs_contact_leads" />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 flex gap-4">
      <div className="size-11 shrink-0 rounded-md bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="mt-1 font-semibold text-ink text-sm break-words">{children}</div>
      </div>
    </div>
  );
}
