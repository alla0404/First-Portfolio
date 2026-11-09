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
            구글 로그인
          </Button>
          {/* 경계선 */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 text-muted-foreground bg-black uppercase">
                OR CONTINUE WITH
              </span>
            </div>
          </div>
          {/* 로그인 폼 */}
          <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* ... */}
      {/* Build the form here */}
      {/* ... */}
    </form>
  )
}
        </div>
      </div>
    </main>
  );
}
