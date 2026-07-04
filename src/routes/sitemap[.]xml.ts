import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { site } from "@/lib/data";

const BASE_URL = site.url;

const paths = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/about", priority: "0.7", changefreq: "monthly" as const },
  { path: "/services", priority: "0.9", changefreq: "monthly" as const },
  { path: "/solar-systems", priority: "0.9", changefreq: "monthly" as const },
  { path: "/brands", priority: "0.6", changefreq: "monthly" as const },
  { path: "/subsidy", priority: "0.9", changefreq: "monthly" as const },
  { path: "/projects", priority: "0.7", changefreq: "monthly" as const },
  { path: "/contact", priority: "0.8", changefreq: "monthly" as const },
  { path: "/apply-subsidy", priority: "1.0", changefreq: "weekly" as const },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths
          .map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>`,
              `    <priority>${e.priority}</priority>`,
              `  </url>`,
            ].join("\n"),
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
