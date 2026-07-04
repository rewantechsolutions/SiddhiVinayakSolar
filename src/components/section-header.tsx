export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && (
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
          [ {eyebrow} ]
        </span>
      )}
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold tracking-tight text-ink text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-pretty">{subtitle}</p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative border-b border-border bg-surface overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
        {eyebrow && (
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
            [ {eyebrow} ]
          </span>
        )}
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold tracking-tight text-ink text-balance max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
