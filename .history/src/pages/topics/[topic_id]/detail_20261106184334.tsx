import { Button, Separator } from "@/components/ui";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function TopicDetail() {
  return (
    <main className="w-full h-full min-h-180 flex p-6 gap-6">
      <div className="relative w-full h-100 bg-cover bg-position-[50%_35%] bg-accent">
        {/* 뒤로가기 버튼 */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-6 left-6 z-10"
          onClick={() => navigate("/")}
        >
          <ArrowLeft />
        </Button>
        {/* 좌, 우, 하단 그라데이션 */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-transparent to-transparent "></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent "></div>
        <div className="absolute inset-0 bg-linear-to-l from-[#0a0a0a] via-transparent to-transparent "></div>
      </div>
      <section className="relative w-full flex flex-col items-center">
        <span className="mb-4"># IT 및 프로그래밍</span>
        <h1 className="scroll-m-20 text-center font-extrabold tracking-tight text-4xl">
          리엑트와 수파베이스를 활용한 CRUD 프로젝트 만들기
        </h1>
        <Separator className="w-6! my-6 bg-foreground" />
      </section>
    </main>
  );
}
