import { CaseSensitive } from "lucide-react";
import { Card, Separator } from "../ui";
import type { Topic } from "@/types/topic.type";
import dayjs from "dayjs";

interface Props {
  props: Topic;
}

function extractTextFromContent(content: string | any[], maxChars = 200) {
  try {
    const parsed = typeof content === "string" ? JSON.parse(content) : content;

    if (!Array.isArray(pared)) {
      console.warn("content 데이터 타입이 배열이 아닙니다.");
      return "";
    }
  } catch (error) {
    console.log("콘텐츠 파싱 실패: ", error);
    return "";
  }
}

export function NewTopicCard({ props }: Props) {
  return (
    <Card className="w-full h-fit p-4 gap-4">
      <div className="flex items-start gap-4">
        <div className="flex-1 flex flex-col items-start">
          {/* 썸네일과 제목 */}
          <h3 className="h-16 text-base font-semibold tracking-tight line-clamp-2">
            <CaseSensitive size={16} className="text-muted-foreground" />
            <p>{props.title}</p>
          </h3>
          {/* 본문 */}
          <p className="line-clamp-3 text-muted-foreground">{props.content}</p>
        </div>
        <img
          src={props.thumbnail}
          alt="@THUMBNAIL"
          className="w-35 h-35 aspect-square rounded-lg object-cover"
        />
      </div>
      <Separator />
      <div className="w-full flex items-center justify-between">
        <p>개발자 googy</p>
        <p>{dayjs(props.created_at).format("YYYY. MM. DD")}</p>
      </div>
    </Card>
  );
}
