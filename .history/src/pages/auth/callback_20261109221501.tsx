import { useAuthStore } from "@/stores";
import { useNavigate } from "react-router";

export default function Authcallback() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  return <div>Authcallback</div>;
}
