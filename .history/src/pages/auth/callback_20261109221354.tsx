import { useNavigate } from "react-router";

export default function Authcallback() {
  const navigate = useNavigate();
  const setUser = useAuthStore(() => state.setUser);
  return <div>Authcallback</div>;
}
