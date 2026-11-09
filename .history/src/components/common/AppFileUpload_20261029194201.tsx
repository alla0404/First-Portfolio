import { useRef } from "react";
import { Button, Input } from "../ui";
import { Image } from "lucide-react";

interface Props {
  file: File | string | null;
  onChange: (file: File | string | null) => void;
}

export function AppFileUpload({ file, onChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 이미지 미리보기
  const handleRenderPreView = () => {
    if (typeof file === "string") {
      return (
        <img
          src={file}
          alt="@THUMBNALL"
          className="w-full aspect-video rounded-lg object-cover border"
        />
      );
    } else if (file instanceof File) {
      return (
        <img
          src={URL.createObjectURL(file)}
          alt="@THUMBNALL"
          className="w-full aspect-video rounded-lg object-cover border"
        />
      );
    }

    // 썸네일이 설정되지 않은 경우에는 기본 이미지 아이콘을 보여줍니다.
    return (
      <div className="w-full flex items-center justify-center aspect-video bg-card rounded-lg">
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => fileInputRef.current?.click()}
        >
          <Image />
        </Button>
      </div>
    );
  };

  return (
    <>
      {handleRenderPreView()}
      <Input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
      />
    </>
  );
}
