import { Card, Separator } from "../ui";

export function NewTopicCard() {
  return (
    <Card className="w-full p-4 gap-4">
      <div></div>
      <Separator />
      <div className="w-full flex items-center justify-between">
        <p>개발자 googy</p>
        <p>2026. 11. 05</p>
      </div>
    </Card>
  );
}
