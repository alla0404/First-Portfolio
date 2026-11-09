import { useRef } from "react";
import { Input } from "../ui";

export function AppFileUpload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Input type="file" accept="image/*" ref={fileInputRef} className="hidden" />
  );
}
