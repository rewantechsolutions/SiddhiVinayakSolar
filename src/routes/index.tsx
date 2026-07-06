import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Award,
  CheckCircle2,
  Sun,
  Home,
  Factory,
  Tractor,
  Wallet,
  Wrench,
  Quote,
  Star,
  Phone,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { SectionHeader } from "@/components/section-header";
import { EnquiryForm } from "@/components/enquiry-form";
import {
  site,
  stats,
  solarSystems,
  services,
  brands,
  testimonials,
  faqs,
  trustBadges,
  projects,
} from "@/lib/data";

const icons = { sun: Sun, home: Home, factory: Factory, tractor: Tractor, wallet: Wallet, wrench: Wrench };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siddhi Vinayak Solar — Rooftop Solar Installer in Jhansi UP | PM Surya Ghar" },
      {
        name: "description",
        content:
          "Government empanelled solar installer in Jhansi. On-grid, off-grid & hybrid rooftop solar with PM Surya Ghar subsidy up to ₹1,08,000. Free site survey.",
      },
      { property: "og:title", content: "Siddhi Vinayak Solar Solutions — Jhansi" },
      { property: "og:description", content: "Rooftop solar with up to ₹1,08,000 PM Surya Ghar subsidy. Govt empanelled installer in Jhansi." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          image: site.images.hero,
          telephone: site.phones[0],
          email: site.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Galla Mandi Road, Near Kailash Residency",
            addressLocality: "Jhansi",
            addressRegion: "UP",
            postalCode: "284001",
            addressCountry: "IN",
          },
          areaServed: "Bundelkhand, Uttar Pradesh",
          priceRange: "₹₹",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 grid gap-14 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Govt Empanelled · PM Surya Ghar Registered
            </div>
            <h1 className="mb-6 font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] text-ink text-balance">
              Rooftop Solar with{" "}
              <span className="text-primary">₹1,08,000</span>{" "}
              Government Subsidy.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Jhansi's trusted solar installer — On-Grid, Off-Grid & Hybrid systems from Tata, Adani &
              Waaree. End-to-end PM Surya Ghar subsidy assistance up to ₹1,08,000.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/apply-subsidy"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-all hover:bg-ink"
              >
                Apply for Subsidy <ArrowRight className="size-4" />
              </Link>
              <a
                href={`tel:${site.primaryPhone}`}
                className="inline-flex h-12 items-center gap-2 rounded-md border border-input bg-card px-6 font-semibold text-ink transition-all hover:bg-accent"
              >
                <Phone className="size-4" /> Free Site Survey
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              {trustBadges.slice(0, 4).map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] soft-float">
              <img
                src={site.images.hero}
                alt="Rooftop solar installation in Jhansi at sunrise"
                width={1600}
                height={1200}
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-ink text-background p-5 max-w-[240px] rounded-lg shadow-xl">
              <div className="font-display text-3xl font-extrabold text-solar leading-none">₹1,08,000</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-background/70">
                Maximum PM Surya Ghar subsidy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink py-12">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-5xl font-extrabold text-solar leading-none">
                {s.k}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-background/60">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSIDY HIGHLIGHT */}
      <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-solar/10 py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
              [ PM Surya Ghar Muft Bijli Yojana ]
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold tracking-tight text-ink text-balance">
              Get up to <span className="text-primary">₹1,08,000</span> subsidy directly to your bank.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              We handle the entire application — portal registration, DVVNL feasibility, installation,
              net-metering and subsidy disbursal. Zero paperwork stress.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/apply-subsidy"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-ink"
              >
                Apply Now <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/subsidy"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-input bg-card px-5 text-sm font-semibold text-ink hover:bg-accent"
              >
                Subsidy Calculator
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { k: "1 kW", v: "₹30,000" },
              { k: "2 kW", v: "₹60,000" },
              { k: "3 kW", v: "₹78,000" },
              { k: "5+ kW", v: "₹1,08,000" },
            ].map((c) => (
              <div key={c.k} className="rounded-xl border border-border bg-card p-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.k} System</div>
                <div className="mt-2 font-display text-2xl font-extrabold text-primary">{c.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">Central subsidy</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLAR SYSTEMS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Solar System Types"
            title="Choose the right system for your rooftop."
            subtitle="Every home is different. We design On-Grid, Off-Grid and Hybrid systems tuned to your load, roof and location."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {solarSystems.map((s) => (
              <Link
                key={s.slug}
                to="/solar-systems"
                className="group shine-card overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={s.image} alt={s.name} className="size-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary">{s.short}</div>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{s.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">From</span>
                    <span className="font-display text-lg font-extrabold text-primary">{s.priceFrom}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="What We Do" title="Complete solar solutions under one roof." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = icons[s.icon];
              return (
                <div key={s.title} className="shine-card rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                  <div className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Partner Brands"
            title="We install only Tier-1, Made-in-India equipment."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {brands.map((b) => (
              <div
                key={b.name}
                className="shine-card flex flex-col items-center justify-center gap-1 rounded-lg border border-border bg-card px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm"
              >
                <Sparkles className="size-5 text-primary mb-1" />
                <div className="font-display font-bold text-sm text-ink">{b.name}</div>
                <div className="text-[10px] text-muted-foreground">{b.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeader eyebrow="Installations" title="1200+ installations across Bundelkhand." />
            <Link to="/projects" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-primary">
              View gallery <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-4">
            {projects.slice(0, 4).map((p) => (
              <div key={p.title} className="group shine-card relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="size-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-4 text-background">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-solar">{p.type} · {p.size}</div>
                  <div className="font-semibold text-sm">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14 items-start">
          <div>
            <SectionHeader
              eyebrow="Why Siddhi Vinayak"
              title="Trust, transparency and real after-sales service."
            />
            <div className="mt-8 space-y-5">
              {[
                { icon: ShieldCheck, title: "Govt Empanelled Vendor", body: "UP NEDA registered, DVVNL approved installer with active MNRE listing." },
                { icon: Award, title: "Tier-1 Equipment Only", body: "Tata, Adani, Waaree, Exide, Luminous — no cheap unbranded panels." },
                { icon: Wallet, title: "End-to-End Subsidy", body: "We handle portal, DISCOM, net-meter and subsidy credit — you just sign." },
                { icon: Wrench, title: "5-Year Service Warranty", body: "Free maintenance visits, remote monitoring and 25-year panel warranty." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="size-11 shrink-0 rounded-md bg-card border border-border flex items-center justify-center text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink">{title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={site.images.facility}
              alt="Siddhi Vinayak Solar installation team in Jhansi"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-[var(--shadow-elegant)]"
            />
            <div className="absolute -bottom-6 -right-6 max-w-[260px] bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <div className="font-display text-2xl font-extrabold leading-tight">Since {site.since}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest opacity-80">
                Powering Jhansi & Bundelkhand
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Customer Voices" title="What our customers say." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="shine-card rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <Quote className="size-6 text-primary/40" />
                <p className="mt-3 text-ink leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-1 text-solar">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-solar" strokeWidth={0} />
                  ))}
                </div>
                <div className="mt-3 border-t border-border pt-3">
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader eyebrow="FAQ" title="Solar doubts, cleared." align="center" />
          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 open:shadow-md">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-semibold text-ink">
                  {f.q}
                  <span className="text-primary text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CTA */}
      <section className="border-t border-border bg-ink py-20 text-background">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-solar">
              [ Get a Free Quote ]
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold tracking-tight text-background text-balance">
              Ready to switch to solar?
            </h2>
            <p className="mt-4 text-background/70 max-w-md">
              Fill the form and our team will call you within 24 hours with a custom quote and
              subsidy estimate. No obligation.
            </p>
            <div className="mt-6 space-y-2 text-sm text-background/70">
              <div className="flex items-center gap-2"><Phone className="size-4 text-solar" /> {site.phones[0]}</div>
              <div className="flex items-center gap-2"><Phone className="size-4 text-solar" /> {site.phones[1]}</div>
            </div>
          </div>
          <div className="rounded-2xl bg-background p-6 md:p-8 text-foreground">
            <EnquiryForm submitLabel="Get Free Quote" storageKey="svs_home_leads" formType="Home Quote Form" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
