import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
