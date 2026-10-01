import { site } from "@/lib/site";

export default function sitemap() {
  const routes = ["", "/services", "/pricing", "/about", "/contact"];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
