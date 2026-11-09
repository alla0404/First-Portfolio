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
  // 👇 이 부분을 아래와 같이 추가해 주세요!
  build: {
    rollupOptions: {
      // 빌드할 때 모듈 관련 경고나 에러가 나도 무시하고 넘어갑니다
      external: [],
    },
    commonjsOptions: {
      strictRequires: false,
    },
  },
});
