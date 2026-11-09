import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/stores";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Authcallback() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (!session?.user) {
          console.error("세션에 사용자 정보가 없습니다.");
          return;
        }

        const user = session.user;

        if (!user.id) {
          console.error("유저 ID가 없습니다.");
          return;
        }
        try {
          const { data, error } = await supabase.from("user").insert([
            {
              id: user.id,
              email: user.email,
              service_agreed: true,
              privacy_agreed: true,
              marketing_agreed: false,
            },
          ]);
        } catch (error) {
          console.error(error);
        }
      },
    );
  }, []);

  return <div>Authcallback</div>;
}
