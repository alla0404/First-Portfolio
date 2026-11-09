import { useEffect, useState, type ReactElement } from "react";
import { useAuthStore } from "@/stores";
import { supabase } from "@/lib/supabase";
import dayjs from "dayjs";

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
import { toast } from "sonner";

interface Props {
  children: ReactElement;
}

export function AppDraftsDialog({ children }: Props) {
  const user = useAuthStore((state) => state.user);
  const [drafts, setDrafts] = useState<any[]>([]);

  const fetchDrafts = async () => {
    try {
      // .is() 쿼리문은 null만 체크할 경우 사용한다.
      // .eq() 쿼리문을 연속으로 사용하여 임시 저장된 토픽을 조회합니다.
      const { data: topics, error } = await supabase
        .from("topic")
        .select("*")
        .eq("author", user.id)
        .is("status", "temp");

      if (error) {
        toast.error(error.message);
        return;
      }
      if (topics) setDrafts(topics);
    } catch (error) {}
  };

  useEffect(() => {
    if (user.email) fetchDrafts();
  }, []);

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
          {drafts.length > 0 ? (
            drafts.map((drafts: any) => {
              return (
                <div className="min-h-60 flex flex-col items-center justify-center gap-3">
                  <div className="w-full flex items-center justify-between py-2 px-4 rounded-md bg-card/50 cursor-pointer">
                    <div className="flex items-start gap-2">
                      <Badge className="w-5 h-5 mt-0.75 rounded-sm aspect-square text-foreground bg-[#E26F24] hover-[#E2F24]">
                        1
                      </Badge>
                      <div className="flex flex-col">
                        <p>{drafts.title}</p>
                        <p className="text-xs text-muted-foreground">
                          작성일: {dayjs(drafts.createdAt).format("YYYY.MM.DD")}
                        </p>
                      </div>
                    </div>
                    <Badge variant={"outline"}>작성중</Badge>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="min-h-60 flex items-center justify-center">
              <p className="text-muted-forground/50">
                조회 가능한 정보가 없습니다.
              </p>
            </div>
          )}
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
