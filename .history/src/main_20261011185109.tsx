import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import App from "./pages/App.tsx"; // 메인 페이지
import SignIn from "./pages/sign-in.tsx"; // 로그인 페이지
import SignUp from "./pages/sign-up.tsx"; // 회원가입 페이지
import Rootlayout from "./layout.tsx";
import { ThemeProvider } from "./components/common/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<Rootlayout />}>
            <Route index element={<App />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
