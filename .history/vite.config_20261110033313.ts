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
    rollupOptions: {
      external: [],
    },
    // 👇 이 부분을 추가해 주세요! (Rolldown 전용 외부 모듈 처리)
    rolldownOptions: {
      external: [],
    },
    commonjsOptions: {
      strictRequires: false,
    },
  },
});
