import { MetadataRoute } from "next";
import cases from "@/data/cases.json";
import blogs from "@/data/blogs.json";

const siteUrl = "https://advpavanrathod.in";

export async function GET() {
  const staticPages = [
    { url: siteUrl, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteUrl}/about`, lastModified: new Date().toISOString(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/cases`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/blog`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/gallery`, lastModified: new Date().toISOString(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: new Date().toISOString(), changeFrequency: "monthly", priority: 0.9 },
  ];

  const casePages = cases.map(c => ({
    url: `${siteUrl}/cases/${c.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages = blogs.map(b => ({
    url: `${siteUrl}/blog/${b.slug}`,
    lastModified: new Date(b.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const allPages = [...staticPages, ...casePages, ...blogPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
