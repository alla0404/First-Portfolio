import {
  ChartNoAxesCombined,
  ChevronDown,
  CodeXml,
  List,
  Lightbulb,
  Roket,
  Goal,
  DraftingCompass,
  Footprints,
} from "lucide-react";
import { AppHeader, AppFooter } from "./components/common";
import { ThemeProvider } from "./components/common/theme-provider";
import { Button } from "./components/ui";

const CLASS_CATEGORY = [
  { id: 1, label: "전체", category: "", icon: <List /> },
  { id: 2, label: "인문학", category: "humanity", icon: <Lightbulb /> },
  { id: 3, label: "스타트업", category: "start-up", icon: <Roket /> },
  { id: 4, label: "IT•프로그래밍", category: "programming", icon: <CodeXml /> },
  { id: 5, label: "서비스•전략 기획", category: "planning", icon: <Goal /> },
  {
    id: 5,
    label: "마케팅",
    category: "marketing",
    icon: <ChartNoAxesCombined />,
  },
  {
    id: 6,
    label: "디자인•일러스트",
    category: "design",
    icon: <DraftingCompass />,
  },
  {
    id: 7,
    label: "자기개발",
    category: "self-development",
    icon: <Footprints />,
  },
];

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
              <div className="w-full flex flex-col gap-2">
                {CLASS_CATEGORY.map((menu) => {
                  return <Buttom></Buttom>;
                })}
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
