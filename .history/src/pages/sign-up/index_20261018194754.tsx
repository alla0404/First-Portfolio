import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z.object({
  email: z.string().email({
    message: "올바른 형식의 이메일 주소를 입력해주세요.",
  }),
  password: z.string().min(8, {
    message: "비밀본호는 최소 8자 이상이어야 합니다.",
  }),
});

export default function SignUp() {
  return (
    <main className="w-full h-full min-h-180 flex items-start justify-center p-6 gap-6">
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
          {/* 회원가입 폼 */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
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
                name="password"
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
              <div className="w-full flex flex-col gap-3">
                <Button
                  type="submit"
                  variant={"outline"}
                  className="flex-1 bg-sky-800/50!"
                >
                  로그인
                </Button>
                <div className="text-center">
                  계정이 없으신가요?
                  <NavLink to={"sign-up"} className="underline ml-1">
                    회원가입
                  </NavLink>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
