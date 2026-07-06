import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { site } from "@/lib/data";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+0-9\s-]{10,15}$/, "Enter a valid phone number"),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  email: z.string().trim().email().max(120).optional().or(z.literal("")),
  interest: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type LeadFormData = z.infer<typeof schema>;

export type EnquiryFormProps = {
  defaultInterest?: string;
  interests?: string[];
  storageKey?: string;
  submitLabel?: string;
  compact?: boolean;
  formType?: "Contact Form" | "Apply for Subsidy" | "Home Quote Form" | "Free Contact Form";
  formspreeUrl?: string;
};

const DEFAULT_INTERESTS = [
  "On-Grid Solar System",
  "Off-Grid Solar System",
  "Hybrid Solar System",
  "PM Surya Ghar Subsidy",
  "Commercial / Industrial",
  "Agricultural Solar Pump",
  "Solar Atta Chakki",
  "Other / Consultation",
];

function createWhatsAppMessage(data: LeadFormData, formType: string) {
  return [
    `New ${formType} Lead - ${site.short}`,
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `City/Village: ${data.city || "Not provided"}`,
    `Email: ${data.email || "Not provided"}`,
    `Interested In: ${data.interest || "Not selected"}`,
    `Message: ${data.message || "Not provided"}`,
    "",
    `Submitted from: ${typeof window !== "undefined" ? window.location.href : site.url}`,
  ].join("\n");
}

async function saveToFormspree(data: LeadFormData, formType: string, formspreeUrl?: string) {
  if (!formspreeUrl) return { skipped: true };

  const response = await fetch(formspreeUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _subject: `${formType} Lead - ${site.short}`,
      formType,
      ...data,
      submittedAt: new Date().toISOString(),
      pageUrl: typeof window !== "undefined" ? window.location.href : site.url,
    }),
  });

  if (!response.ok) {
    throw new Error("Formspree submission failed");
  }

  return { skipped: false };
}

export function EnquiryForm({
  defaultInterest,
  interests = DEFAULT_INTERESTS,
  storageKey = "svs_leads",
  submitLabel = "Request Free Quote",
  formType = "Contact Form",
  formspreeUrl,
}: EnquiryFormProps) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setLoading(true);

    const lead = parsed.data;
    const leadWithMeta = { ...lead, formType, submittedAt: new Date().toISOString() };

    try {
      const list = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
      list.push(leadWithMeta);
      localStorage.setItem(storageKey, JSON.stringify(list));
    } catch {
      // Local backup is helpful, but the lead should still continue to WhatsApp/Formspree.
    }

    const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      createWhatsAppMessage(lead, formType),
    )}`;

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead", { form_id: storageKey, form_type: formType });
    }

    try {
      await saveToFormspree(lead, formType, formspreeUrl);
      toast.success("Details saved successfully!", {
        description: "WhatsApp is opening with your enquiry details.",
      });
    } catch {
      toast.warning("WhatsApp is opening now.", {
        description: "Formspree did not respond, but your details are ready on WhatsApp.",
      });
    } finally {
      setLoading(false);
      form.reset();
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <input type="hidden" name="formType" value={formType} />
      <Field label="Full Name *" name="name" required placeholder="Ramesh Kumar" />
      <Field label="Phone Number *" name="phone" required type="tel" placeholder="+91 98xxx xxxxx" />
      <Field label="City / Village" name="city" placeholder="Jhansi" />
      <Field label="Email (optional)" name="email" type="email" placeholder="you@example.com" />

      <div className="space-y-2 md:col-span-2">
        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
          I'm interested in
        </label>
        <select
          name="interest"
          defaultValue={defaultInterest ?? ""}
          className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Select an option</option>
          {interests.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2 md:col-span-2">
        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Rooftop size, monthly bill, any questions..."
          className="w-full resize-none rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="h-12 rounded-md bg-primary text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-ink disabled:opacity-60 md:col-span-2"
      >
        {loading ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}

function Field({
  label, name, ...rest
}: InputHTMLAttributes<HTMLInputElement> & { label: string; name: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        {...rest}
        className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
