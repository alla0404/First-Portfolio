import { Button } from "@/components/ui";
import { ArrowLeft, BookOpenCheck, Save } from "lucide-react";

export default function CreacTopic() {
  return (
    <main className="w-full  h-full min-h-256 flex gap-6">
      <div className="fixed right-1/2 bottom-1 translate-1/2 z-20 flex items-center">
        <Button variant={"outline"} size={"icon"}>
          <ArrowLeft />
        </Button>
        <Button variant={"outline"} className="w-22 bg-yellwo-800/50!">
          <Save />
          저장
        </Button>
        <Button variant={"outline"} className="w-22 bg-emerald-800/50!">
          <BookOpenCheck />
          발행
        </Button>
        <Button></Button>
      </div>
    </main>
  );
}
