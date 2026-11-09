import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Separator,
  DialogClose,
  Button,
  Badge,
} from "@/components/ui";

import type { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export function AppDraftsDialog({ children }: Props) {
  return (
    <Dialog>
      <DialogTrigger render={children} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>임시 저장된 토픽</DialogTitle>
          <DialogDescription>
            임시 저장된 토픽 목록입니다. 이어서 작성하거나 삭제할 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          <div className="flex items-center gap-2">
            <p>임시 저장</p>
            <p className="text-base text-green-600 -mr-1.5">10</p>
            <p>건</p>
          </div>
          <Separator />
          <div className="min-h-60 flex items-center justify-center">
            <p className="text-muted-forground/50">
              조회 가능한 정보가 없습니다.
            </p>
          </div>
          <div className="min-h-60 flex flex-col items-center justify-center gap-3">
            <div className="flex items-start gap-2">
              <Badge className="aspect-square text-foreground bg-[#E26F24] hover-[#E2F24]">
                1
              </Badge>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type="button" variant={"outline"} className="border-0">
              닫기
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
