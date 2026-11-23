import { AppEditor } from "@/components/common";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Separator,
} from "@/components/ui";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/stores";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

export default function TopicDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useAuthStore((state) => state.user);

  const [author, setAuthor] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<string>("");

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

      if (topic) {
        console.log(topic);
        setAuthor(topic[0].author);
        setCategory(topic[0].category);
        setTitle(topic[0].title);
        setThumbnail(topic[0].thumbnail);
        setContent(topic[0].content);
        // 실제 작성 날짜 가져오기
        setCreatedAt(topic[0].created_at);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleDlete = async () => {
    try {
      const { error } = await supabase.from("topic").delete().eq("id", id);
      if (error) {
        toast.error(error.message);
        return;
      }
      toast.success("토픽을 삭제하였습니다.");
      navigate("/");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    fetchTopic();
  }, [id]);
  return (
    <main className="w-full h-full min-h-180 flex flex-col">
      {/* 사진 + 제목 + 날짜 */}
      <div
        className="relative w-full h-60 md:h-100 bg-cover bg-center bg-no-repeat bg-accent"
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        {/* 사진을 살짝 어둡게 처리하여 글씨가 잘 보이도록 설정 */}
        <div className="absolute inset-0 bg-black/30" />

        {/* 하단 그라데이션 */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        {/* 뒤로가기 버튼 */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft />
          </Button>

          {author === user?.id && (
            <AlertDialog>
              <AlertDialogTrigger>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-red-800/50!"
                >
                  <Trash2 />
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    정말 해당 토픽을 삭제하시겠습니까?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    삭제하시면 해당 토픽의 모든 내용이 영구적으로 삭제되어
                    복구할 수 없습니다.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel>닫기</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-800/50 text-foreground hover:bg-red-700/50"
                    onClick={handleDlete}
                  >
                    삭제
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>

        {/* 사진 위에 제목과 날짜 표시 */}
        <section className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-4">
          <span className="mb-4 text-sm font-medium text-white">
            # {category}
          </span>

          <h1 className="text-center font-extrabold tracking-tight text-2xl md:text-4xl text-white">
            {title}
          </h1>

          <Separator className="w-6! my-6 bg-white" />

          <span className="text-sm text-white">
            {createdAt &&
              new Date(createdAt).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
          </span>
        </section>
      </div>

      {/* 에디터 내용을 불러와 렌더링 */}
      <div className="w-full py-6">
        {content && <AppEditor props={JSON.parse(content)} readonly />}
      </div>
    </main>
  );
}
