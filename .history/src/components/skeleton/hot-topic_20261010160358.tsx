import { Skeleton } from "../ui";

function SkeletonHotTopic() {
  return (
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="w-full  h-70" />
    </div>
  );
}

export { SkeletonHotTopic };
