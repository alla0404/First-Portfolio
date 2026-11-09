import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Rolldown/Rollup 경고를 무시하고 빌드가 중단되지 않도록 설정
    rollupOptions: {
      external: [],
      onwarn() {
        // 번들링 관련 경고를 에러로 전환시키지 않고 무시합니다.
        return;
      },
    },
    commonjsOptions: {
      strictRequires: false,
    },
  },
});
