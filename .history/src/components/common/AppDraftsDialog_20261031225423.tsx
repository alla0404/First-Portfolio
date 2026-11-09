import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

interface Props {
  children: React.ReactNode;
}

export function AppDraftsDialog({ children }: Props) {
  return (
    <Dialog>
      <DialogTrigger render={children} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>임시 저장된 토픽</DialogTitle>
          <DialogDescription>임시 저장된 토픽 목록입니다.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
