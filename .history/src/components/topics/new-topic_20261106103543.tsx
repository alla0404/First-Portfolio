import { CaseSensitive } from "lucide-react";
import { Card, Separator } from "../ui";

export function NewTopicCard() {
  return (
    <Card className="w-full h-fit p-4 gap-4">
      <div className="flex items-start gap-4">
        <div className="flex-1 flex flex-col items-start">
          {/* 썸네일과 제목 */}
          <h3 className="h-16 text-base font-semibold tracking-tight line-clamp-2">
            <CaseSensitive size={16} className="text-muted-foreground" />
            <p>브랜드 확립에 반드시 필요한 컨셉, 기능보다 의미를 사는 시대</p>
          </h3>
          {/* 본문 */}
          <p className="line-clamp-3 text-muted-foreground">
            안녕하세요. 도배하는 개발자 googy 입니다.안녕하세요. 도배하는 개발자
            googy 입니다.안녕하세요. 도배하는 개발자 googy 입니다.안녕하세요.
            도배하는 개발자 googy 입니다.{" "}
          </p>
        </div>
        <img
          src=""
          alt=""
          className="w-35 h-35 aspect-squar rounded-lg object-cover"
        />
      </div>
      <Separator />
      <div className="w-full flex items-center justify-between">
        <p>개발자 googy</p>
        <p>2026. 11. 05</p>
      </div>
    </Card>
  );
}
