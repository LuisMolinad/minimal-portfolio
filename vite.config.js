import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base =
  process.env.NODE_ENV === "production" ? "/minimal-portafolio/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  base: base, // Establece la ruta base
  plugins: [react()],
});
