import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const posts = (await getCollection("posts")).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: "AI Experiments",
    description: "Experiments in building with AI agents.",
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `${base}/posts/${p.id}/`,
    })),
  });
}
