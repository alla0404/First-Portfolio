import { Button, Separator } from "../ui";

function AppFooter() {
  return (
    <footer className="w-full ">
      <div className="w-full max-w-332 flex flex-col gap-6 p-6 pb-18">
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col items-start justify-between">
            <div className="flex flex-col items-start">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                나의 학습 여정이,
              </h3>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                나만의 창작으로 이어지는 플랫폼
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Button variant={"outline"} size={"icon"} className="border-0">
                <img
                  src="/assets/images/img-001.svg"
                  alt="@Sns"
                  className="w-6 h-6 mt-0.5"
                />
              </Button>
              <Button variant={"outline"} size={"icon"} className="border-0">
                <img
                  src="/assets/images/img-002.png"
                  alt="@Sns"
                  className="w-5.5 h-5.5"
                />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">
              이용약관
            </p>
            <Separator orientation-verticall className="h-3.5!" />
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">
              개인정보처리방침
            </p>
            <Separator orientation-verticall className="h-3.5!" />
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">
              클래스 론칭 문의
            </p>
          </div>
        </div>
        <Separator />
        <div></div>
      </div>
    </footer>
  );
}

export { AppFooter };
