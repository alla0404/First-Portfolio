import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { NavLink } from "react-router";

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
import { ArrowLeft } from "lucide-react";

const formSchema = z
  .object({
    email: z.string().email({
      message: "올바른 형식의 이메일 주소를 입력해주세요.",
    }),
    password: z.string().min(8, {
      message: "비밀본호는 최소 8자 이상이어야 합니다.",
    }),
    confirmPassword: z.string().min(8, {
      message: "비밀번호 확인을 입력해 주세요.",
    }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "비밀번호가 일치하지 않습니다.",
        path: ["confirmPassword"],
      });
    }
  });

export default function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = () => {
    console.log("회원가입 버튼 클릭!");
  };

  return (
    <main className="w-full h-full min-h-180 flex items-start justify-center p-6 gap-6">
      <div className="w-100 max-x-100 flex flex-col px-6 gap-6">
        <div className="flex flex-col">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            회원가입
          </h4>
          <p className="text-muted-foreground">
            회원가입을 위한 정보를 입력해주세요.
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
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="비밀번호 확인을 입력하세요."
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
                    <FormLabel>비밀번호 확인</FormLabel>
                    <FormControl>
                      <Input placeholder="비밀번호를 입력하세요." {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <div className="grid gap-2">
                <div>
                  <Asterist size={14} />
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <div className="flex items-conter gap-2">
                  <Button type="button" variant={"outline"} size={"icon"}>
                    <ArrowLeft />
                  </Button>
                  <Button
                    type="submit"
                    variant={"outline"}
                    className="flex-1 bg-sky-800/50!"
                  >
                    회원가입
                  </Button>
                </div>
                <div className="text-center">
                  이미 계정이 있으신가요?
                  <NavLink to={"/sign-in"} className="underline ml-1">
                    로그인
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
