import { useState } from "react";
import { AppEditor, AppFileUpload } from "@/components/common";
import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Skeleton,
} from "@/components/ui";
import { Topic_CATEGORY } from "@/constants/category.constant";
import {
  ArrowLeft,
  Asterisk,
  BookOpenCheck,
  ImageOff,
  Save,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/stores";
import { useParams } from "react-router";
import type { Block } from "@blocknote/core";

export default function CreateTopic() {
  const user = useAuthStore((state) => state.user);
  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<Block[]>([]);
  const [category, setCategory] = useState<string>("");
  const [thumbnail, setThumbNail] = useState<File | string | null>(null);

  const handleSave = async () => {
    if (!title && !content && !category && !thumbnail) {
      toast.warning("제목, 본문, 카테고리, 썸네일을 기입하세요.");
      return;
    }

    console.log("title: ", title);
    console.log("content: ", content);
    console.log("category: ", category);
    console.log("thumbnail: ", thumbnail);

    console.log(id);

    const { data, error } = await supabase
      .from("topic")
      .update([
        {
          title,
          content,
          category,
          thumbnail,
          author: user.id,
        },
      ])
      .eq("id", id)
      .select();

    if (error) {
      toast.error(error.message);
      return;
    }

    if (data) {
      toast.success("작성 중인 토픽을 저장하였습니다.");
      return;
    }
  };
  const handlePublish = async () => {
    if (!title || !content || !category || !thumbnail) {
      toast.warning("제목, 본문, 카테고리, 썸네일은 필수값입니다.");
      return;
    }
  };

  return (
    <main className="w-full  h-full min-h-256 flex gap-6 p-6">
      <div className="fixed right-1/2 bottom-10 translate-1/2 z-20 flex items-center">
        <Button variant={"outline"} size={"icon"}>
          <ArrowLeft />
        </Button>
        <Button
          type="button"
          variant={"outline"}
          className="w-22 bg-yellow-800/50!"
          onClick={handleSave}
        >
          <Save />
          저장
        </Button>
        <Button
          type="button"
          variant={"outline"}
          className="w-22 bg-emerald-800/50!"
          onClick={handlePublish}
        >
          <BookOpenCheck />
          발행
        </Button>
      </div>
      {/* 토픽 작성하기 */}
      <section className="w-3/4 h-full flex flex-col gap-6">
        <div className="flex flex-col pb-6 border-b">
          <span className="text-[#F96859] font-semibold">step 01</span>
          <span className="text-bass font-semibold">토픽 작성하기</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Asterisk size={14} className="text-[#F96859]" />
            <Label className="text-muted-foreground">제목</Label>
            <Input
              placeholder="토픽 제목을 입력하세요"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="h-16 text-lg! placehold:font-semibold border-0"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Asterisk size={14} className="text-[#F96859]" />
            <Label className="text-muted-foreground">본문</Label>
          </div>
          {/* BlockNote Text Editor UI */}
          <AppEditor setContent={setContent} />
        </div>
      </section>
      {/* 카테고리 및 썸네일 등록 */}
      <section className="w-1/4 h-full flex flex-col gap-6">
        <div className="flex flex-col pb-6 border-b">
          <span className="text-[#F96859] font-semibold">step 02</span>
          <span className="text-bass font-semibold">
            카테고리 및 썸네일 등록
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Asterisk size={14} className="text-[#F96859]" />
            <Label className="text-muted-foreground">카테고리</Label>
          </div>
          <Select onValueChange={(value) => setCategory(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="토픽(주제) 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>카테고리(주제)</SelectLabel>
                {Topic_CATEGORY.map((item) => {
                  return (
                    <SelectItem key={item.id} value={item.category}>
                      {item.label}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Asterisk size={14} className="text-[#F96859]" />
            <Label className="text-muted-foreground">썸네일</Label>
          </div>
          {/* 썸네일 UI */}
          <AppFileUpload file={thumbnail} onChange={setThumbNail} />
          <Button variant={"outline"} className="border-0" onClick={() = setThumbnail(null)}>
            <ImageOff />
            썸네일 제거
          </Button>
        </div>
      </section>
    </main>
  );
}
