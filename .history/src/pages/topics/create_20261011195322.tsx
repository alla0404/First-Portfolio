import { Button } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export default function CreacTopic() {
  return (
    <main className="w-full  h-full min-h-256 flex gap-6">
      <div className="fixed right-1/2 bottom-1 translate-1/2 z-20 flex items-center">
        <Button variant={"outline"} size={"icon"}>
          <ArrowLeft />
        </Button>
        <Button></Button>
        <Button></Button>
      </div>
    </main>
  );
}
