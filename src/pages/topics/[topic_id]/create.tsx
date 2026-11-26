import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores";
import { nanoid } from "nanoid";
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
import { useNavigate, useParams } from "react-router";
import type { Block } from "@blocknote/core";
import { TOPIC_STATUS } from "@/types/topic.type";

export default function CreateTopic() {
  const user = useAuthStore((state) => state.user);
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<Block[]>([]);
  const [category, setCategory] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | string | null>(null);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("insight");
    }
  };

  useEffect(() => {
    if (id) {
      fetchTopic();
    }
  }, [id]);

  const fetchTopic = async () => {
    try {
      const { data: topic, error } = await supabase
        .from("topic")
        .select("*")
        .eq("id", id);
      if (error) {
        toast.error(error.message);
        return;
      }

      console.log(topic);

      if (topic) {
        setTitle(topic[0].title);
        setContent(JSON.parse(topic[0].content));
        setCategory(topic[0].category);
        setThumbnail(topic[0].thumbnail);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleSave = async () => {
    if (!user?.id) {
      toast.warning("로그인이 필요합니다.");
      return;
    }

    try {
      let thumbnailUrl: string | null = null;

      // 썸네일 업로드
      if (thumbnail instanceof File) {
        const fileExt = thumbnail.name.split(".").pop();
        const fileName = `${nanoid()}.${fileExt}`;
        const filePath = `topics/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("files")
          .upload(filePath, thumbnail);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage.from("files").getPublicUrl(filePath);
        thumbnailUrl = data.publicUrl;
      } else if (typeof thumbnail === "string") {
        thumbnailUrl = thumbnail;
      }

      // 저장할 데이터
      const topicData = {
        title,
        content: JSON.stringify(content),
        category,
        thumbnail: thumbnailUrl,
        author: user.id,
        status: TOPIC_STATUS.TEMP,
      };

      // 기존 토픽이면 UPDATE, 새 토픽이면 INSERT
      if (id) {
        const { error } = await supabase
          .from("topic")
          .update(topicData)
          .eq("id", id);

        if (error) throw error;

        toast.success("작성 중인 토픽을 저장하였습니다.");
      } else {
        const { data, error } = await supabase
          .from("topic")
          .insert(topicData)
          .select("id")
          .single();

        if (error) throw error;

        toast.success("새 토픽을 임시 저장하였습니다.");

        // 생성된 ID를 주소에 반영
        navigate(`/topics/${data.id}/create`, { replace: true });
      }
    } catch (error) {
      console.error(error);
      toast.error("토픽 저장에 실패하였습니다.");
    }
  };

  const handlePublish = async () => {
    if (!user?.id) {
      toast.warning("로그인이 필요합니다.");
      return;
    }

    try {
      let thumbnailUrl: string | null = null;

      // 썸네일 업로드
      if (thumbnail instanceof File) {
        const fileExt = thumbnail.name.split(".").pop();
        const fileName = `${nanoid()}.${fileExt}`;
        const filePath = `topics/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("files")
          .upload(filePath, thumbnail);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage.from("files").getPublicUrl(filePath);
        thumbnailUrl = data.publicUrl;
      } else if (typeof thumbnail === "string") {
        thumbnailUrl = thumbnail;
      }

      // 발행할 데이터
      const topicData = {
        title,
        content: JSON.stringify(content),
        category,
        thumbnail: thumbnailUrl,
        author: user.id,
        status: TOPIC_STATUS.PUBLISH,
      };

      // 기존 토픽이면 UPDATE, 새 토픽이면 INSERT
      if (id) {
        const { error } = await supabase
          .from("topic")
          .update(topicData)
          .eq("id", id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from("topic").insert(topicData);

        if (error) throw error;
      }

      toast.success("토픽을 발행하였습니다.");
      navigate("/insight");
    } catch (error) {
      console.error(error);
      toast.error("토픽 발행에 실패하였습니다.");
    }
  };

  return (
    <main className="w-full  h-full min-h-256 flex gap-6 p-6">
      <div className="fixed right-1/2 bottom-10 translate-1/2 z-20 flex items-center">
        <Button
          variant={"outline"}
          size={"icon"}
          type="button"
          onClick={handleGoBack}
        >
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
          <span className="text-base font-semibold">토픽 작성하기</span>
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
          <AppEditor props={content} setContent={setContent} />
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
          <Select
            value={category}
            onValueChange={(value) => setCategory(value ?? "")}
          >
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
          <AppFileUpload file={thumbnail} onChange={setThumbnail} />
          <Button
            variant={"outline"}
            className="border-0"
            onClick={() => setThumbnail(null)}
          >
            <ImageOff />
            썸네일 제거
          </Button>
        </div>
      </section>
    </main>
  );
}
