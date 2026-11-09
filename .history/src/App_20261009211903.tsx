import { ChevronDown } from "lucide-react";
import { AppHeader, AppFooter } from "./components/common";
import { ThemeProvider } from "./components/common/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
        <AppHeader />
        <div className="container">
          <main className="w-full h-full min-h-180 flex p-6 gap-6">
            {/* 카테고리 사이드바 */}
            <aside className="min-w-w60 w-60 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                {/* Shadcn UI의 Typography h4 컴포넌트 그대로 사용 */}
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight"></h4>
                <ChevronDown className="mt-1" />
              </div>
            </aside>
            {/* 토픽 콘텐츠 */}
            <section></section>
          </main>
        </div>
        <AppFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
