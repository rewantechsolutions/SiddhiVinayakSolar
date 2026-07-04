import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";
import { FloatingActions } from "./floating-actions";
import { ScrollReveal } from "./scroll-reveal";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <FloatingActions />
      <ScrollReveal />
    </div>
  );
}
