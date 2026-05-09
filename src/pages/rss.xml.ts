import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("posts");

  return rss({
    title: "Fang's Blog",
    description: "Fang 的个人博客",
    site: context.site || "https://your-domain.com",
    items: posts
      .filter((p) => !p.data.draft)
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/blog/${post.id.replace(".md", "")}`,
      })),
    customData: "<language>zh-CN</language>",
  });
}
