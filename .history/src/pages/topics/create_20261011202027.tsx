import { Button } from "@/components/ui";
import { ArrowLeft, BookOpenCheck, Save } from "lucide-react";

export default function CreacTopic() {
  return (
    <main className="w-full  h-full min-h-256 flex gap-6">
      <div className="fixed right-1/2 bottom-1 translate-1/2 z-20 flex items-center">
        <Button variant={"outline"} size={"icon"}>
          <ArrowLeft />
        </Button>
        <Button variant={"outline"} className="w-22 bg-yellow-800/50!">
          <Save />
          저장
        </Button>
        <Button variant={"outline"} className="w-22 bg-emerald-800/50!">
          <BookOpenCheck />
          발행
        </Button>
      </div>
      {/* 토픽 작성하기 */}
      <section className="w-3/4 h-full flex flex-col gap-6">
        <div className="flex flex-col pb-6 border-b">
          <span className="text-[#F96859] font-semibold">step 01</span>
          <span className="text-bass font-semibold">토픽 작성하기</span>
        </div>
        <div>제목</div>
      </section>
      {/* 카테고리 및 썸네일 등록 */}
      <section></section>
    </main>
  );
}
