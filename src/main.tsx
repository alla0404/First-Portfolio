import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./components/common/theme-provider.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

import App from "./pages"; // 메인 페이지
import SignIn from "./pages/sign-in"; // 로그인 페이지
import Authcallback from "./pages/auth/callback.tsx"; // 쇼셜 로그인 시, 콜백 페이지
import SignUp from "./pages/sign-up"; // 회원가입 페이지
import Rootlayout from "./pages/layout.tsx"; // 전역 레이아웃 컴포넌트
import CreacTopic from "./pages/topics/[topic_id]/create.tsx"; // 토픽 생성 페이지
import TopicDetail from "./pages/topics/[topic_id]/detail.tsx"; // 토픽 생성 페이지

import "./index.css";
import Portfolio from "./pages/portfolio/index.tsx";
import PaperHanger from "./pages/paper-hanger/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<Rootlayout />}>
            <Route index element={<App />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="auth/callback" element={<Authcallback />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="topics/:id/create" element={<CreacTopic />} />
            <Route path="topics/:id/detail" element={<TopicDetail />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="paper-hanger" element={<PaperHanger />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="top-center" />
    </ThemeProvider>
  </StrictMode>,
);
