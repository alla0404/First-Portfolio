import { Button } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export default function TopicDetail() {
  return (
    <main className="w-full h-full min-h-180 flex p-6 gap-6">
      <div>
        {/* 뒤로가기 버튼 */}
        <Button variant="outline" size="icon">
          <ArrowLeft />
        </Button>
      </div>
    </main>
  );
}
