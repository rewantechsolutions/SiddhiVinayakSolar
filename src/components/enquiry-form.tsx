import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";

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

export type EnquiryFormProps = {
  defaultInterest?: string;
  interests?: string[];
  storageKey?: string;
  submitLabel?: string;
  compact?: boolean;
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

export function EnquiryForm({
  defaultInterest,
  interests = DEFAULT_INTERESTS,
  storageKey = "svs_leads",
  submitLabel = "Request Free Quote",
}: EnquiryFormProps) {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      try {
        const list = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
        list.push({ ...parsed.data, submittedAt: new Date().toISOString() });
        localStorage.setItem(storageKey, JSON.stringify(list));
      } catch {}
      // Analytics hook (placeholder)
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", { form_id: storageKey });
      }
      setLoading(false);
      toast.success("Enquiry received!", {
        description: "Our team will call you back within 24 hours.",
      });
      form.reset();
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <Field label="Full Name *" name="name" required placeholder="Ramesh Kumar" />
      <Field label="Phone Number *" name="phone" required type="tel" placeholder="+91 98xxx xxxxx" />
      <Field label="City / Village" name="city" placeholder="Jhansi" />
      <Field label="Email (optional)" name="email" type="email" placeholder="you@example.com" />

      <div className="md:col-span-2 space-y-2">
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

      <div className="md:col-span-2 space-y-2">
        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Rooftop size, monthly bill, any questions..."
          className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="md:col-span-2 h-12 rounded-md bg-primary font-semibold uppercase tracking-widest text-primary-foreground text-sm transition-all hover:bg-ink disabled:opacity-60"
      >
        {loading ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}

function Field({
  label, name, ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; name: string }) {
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
