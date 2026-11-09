import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // 롤다운 관련 복잡한 건 싹 지우고, 표준 rollupOptions만 사용합니다!
    rollupOptions: {
      external: [],
    },
    commonjsOptions: {
      strictRequires: false,
    },
  },
});
