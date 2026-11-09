import { useRef } from "react";
import { Input } from "../ui";

interface Props {
  file: File | string | null;
  onChange: (file: File | string | null) => void;
}

export function AppFileUpload({ file, onChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 이미지 미리보기
  const handleRenderPreView = () => {
    if (typeof file === "string") {
      <img
        src={file}
        alt="@THUMBNALL"
        className="w-full aspect-video rounded-lg object-cover border"
      />;
    } else if (file instanceof File) {
      return (
        <img
          src={file}
          alt="@THUMBNALL"
          className="w-full aspect-video rounded-lg object-cover border"
        />
      );
    }
  };

  return (
    <Input type="file" accept="image/*" ref={fileInputRef} className="hidden" />
  );
}
