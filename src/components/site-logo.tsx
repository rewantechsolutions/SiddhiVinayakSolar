import { Link } from "@tanstack/react-router";
import { site } from "@/lib/data";

export function SiteLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      to="/"
      className="flex min-w-0 items-center  group transition-all duration-300 hover:opacity-80"
      aria-label={`${site.name} home`}
    >
      <img
        src={site.images.logo}
        alt={`${site.name} logo`}
        width={100}
        height={100}
        className="h-24 w-24 flex-shrink-0 object-contain transition-all duration-300 group-hover:scale-110 sm:h-28 sm:w-28"
      />
      <div className="hidden min-w-0 flex-col gap-0.5 sm:flex">
        <span className={`font-display text-sm font-bold tracking-tight leading-tight md:text-base ${dark ? "text-background" : "text-slate-900"}`}>
          {site.short}
        </span>
        <span className="font-mono text-[8px] font-medium uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 md:text-[9px]">
          Solar Solutions · Jhansi UP
        </span>
      </div>
    </Link>
  );
}
