// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// GitHub Pages serves a project repo under /<repo>/. Change both if you move
// the site to a custom domain (then base becomes "/").
export default defineConfig({
  site: "https://mustafabagdatli-git.github.io",
  base: "/blog_demo",
  integrations: [sitemap()],
});
