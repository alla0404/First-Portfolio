import { Button } from "@/components/ui";

export default function SignIn() {
  return (
    <main className="w-full h-full min-h-180 flex p-6 gap-6">
      <div className="w-100 max-x-100 flex flex-col px-6 gap-6">
        <div className="flex flex-col">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            로그인
          </h4>
          <p className="text-muted-foreground">
            로그인을 위한 정보를 입력해주세요.
          </p>
        </div>
        <div className="grid gap-3">
          {/* 소셜 로그인 */}
          <Button type="button" variant={"secondary"}>
            <img src="" alt="@GOOGLE-LOGo" className="w-4.5 h-4.5 mr-1" />
          </Button>
          {/* 경계선 */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center"></div>
          </div>
          {/* 로그인 폼 */}
        </div>
      </div>
    </main>
  );
}
