import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/stores";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Authcallback() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const {} = supabase.auth.onAuthStateChange((_event, sesstion) => {
      if (!sesstion?.user) {
        console.error("세션에 사용자 정보가 없습니다.");
        return;
      }
    });
  }, []);

  return <div>Authcallback</div>;
}
