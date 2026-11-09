import { useAuthStore } from "@/stores";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Authcallback() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {}, []);

  return <div>Authcallback</div>;
}
