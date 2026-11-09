import { CaseSensitive } from "lucide-react";
import { Card, Separator } from "../ui";

export function NewTopicCard() {
  return (
    <Card className="w-full p-4 gap-4">
      <div>
        {/* 썸네일과 제목 */}
        <div>
          <img src="" alt="" />
          <h3 className="h-16 text-base font-semibold tracking-tight line-clamp-2">
            <CaseSensitive size={16} className="text-muted-foreground" />
            <p>브랜드 확립에 반드시 필요한 컨셉, 기능보다 의미를 사는 시대</p>
          </h3>
        </div>
        {/* 본문 */}
        <p></p>
      </div>
      <Separator />
      <div className="w-full flex items-center justify-between">
        <p>개발자 googy</p>
        <p>2026. 11. 05</p>
      </div>
    </Card>
  );
}
