import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://blogfang.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "directory",
  },
});
