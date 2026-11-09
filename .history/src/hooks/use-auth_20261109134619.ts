import { useAuthStore } from "@/stores";

export default function useAuthListener() {
  const setUser = useAuthStore((state) => state.setYser);
}
