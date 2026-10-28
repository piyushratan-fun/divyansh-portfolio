import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://divyanshkatiyar.web.app/sitemap.xml",
    host: "https://divyanshkatiyar.web.app",
  };
}
