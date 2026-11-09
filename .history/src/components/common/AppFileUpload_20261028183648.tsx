import { useRef } from "react";
import { Input } from "../ui";

export function AppFileUpload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 이미지 미리보기
  const handleRenderPreView = () => {};

  return (
    <Input type="file" accept="image/*" ref={fileInputRef} className="hidden" />
  );
}
