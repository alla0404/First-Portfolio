import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "@/lib/supabase";

export default function Authcallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      // 1. 현재 세션 정보 가져오기
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      // 2. 세션 오류 또는 세션이 없는 경우 처리
      if (sessionError || !session) {
        console.error("세션 처리 오류, 다시 로그인 페이지로 리디렉션합니다.");
      }
    };
  }, []);
  return (
    <main className="w-full h-full min-h-180 flex items-center justify-center">
      로그인을 진행 중입니다.
    </main>
  );
}
