import { Separator } from "../ui";

function AppFooter() {
  return (
    <footer className="w-full ">
      <div className="w-full max-w-332 flex flex-col gap-6 p-6 pb-18">
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col items-start justify-between">
            <div className="flex flex-col items-start">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                The Joke Tax
              </h3>
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
