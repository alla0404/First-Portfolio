import { AppHeader, AppFooter, AppSidebar } from "./components/common";
import { ThemeProvider } from "./components/common/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
        <AppHeader />
        <div className="container">
          <main className="w-full h-full min-h-180 flex p-6 gap-6">
            {/* 카테고리 사이드바 */}
            <AppSidebar />
            {/* 토픽 콘텐츠 */}
            <section className="flex-1"></section>
          </main>
        </div>
        <AppFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
