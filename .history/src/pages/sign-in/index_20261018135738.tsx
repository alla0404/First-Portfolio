import {
  Button,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "올바른 형식의 이메일 주소를 입력해주세요.",
  }),
});

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="이메일 주소를 입력하세요."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호</FormLabel>
                    <FormControl>
                      <Input placeholder="비밀번호를 입력하세요." {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <Button type="submit">로그인</Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
