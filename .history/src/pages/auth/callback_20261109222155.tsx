import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/stores";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Authcallback() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const {} = supabase.auth.onAuthStateChange((_event, sesstion) => {
      if (!sesstion.user) {
        return;
      }
    });
  }, []);

  return <div>Authcallback</div>;
}
