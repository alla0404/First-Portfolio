import { useAuthStore } from "@/stores";

export default function useAuthListener() {
  const setUser = useAuthStore((state) => state.setYser);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email as string,
          role: session.user.role as string,
        });
        navigate("/");
      }
    };
    checkSession();
  }, []);
}
