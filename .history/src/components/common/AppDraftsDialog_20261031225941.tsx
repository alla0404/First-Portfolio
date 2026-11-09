import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
      </DialogContent>
    </Dialog>
  );
}
