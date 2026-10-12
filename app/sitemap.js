import { SITE_URL } from "./site";
import { SUPPORT_MENU } from "./support/menu";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...SUPPORT_MENU.map((m) => ({
      url: `${SITE_URL}/support/${m.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    { url: `${SITE_URL}/privacy/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
