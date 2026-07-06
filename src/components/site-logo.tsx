import { Link } from "@tanstack/react-router";
import { site } from "@/lib/data";

export function SiteLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex min-w-0 max-w-[235px] items-center gap-2 transition-all duration-300 hover:opacity-80 sm:max-w-none sm:gap-3"
      aria-label={`${site.name} home`}
    >
      <img
        src={site.images.logo}
        alt={`${site.name} logo`}
        width={96}
        height={96}
        className="h-14 w-14 flex-shrink-0 object-contain transition-all duration-300 group-hover:scale-105 xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
      />
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className={`line-clamp-2 font-display text-[12px] font-bold leading-tight tracking-tight xs:text-sm sm:text-base ${dark ? "text-background" : "text-slate-900"}`}>
          {site.short}
        </span>
        <span className="font-mono text-[8px] font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 md:text-[9px]">
          Solar Solutions · Jhansi UP
        </span>
      </div>
    </Link>
  );
}
