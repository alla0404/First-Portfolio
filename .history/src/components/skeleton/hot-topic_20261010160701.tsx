import { Skeleton } from "../ui";

function SkeletonHotTopic() {
  return (
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="w-full  h-70" />
      <div className="flex items-center get-2">
        <Skeleton className="w-18 h-10 rounded-full" />
      </div>
    </div>
  );
}

export { SkeletonHotTopic };
