export default function Authcallback() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleAuthCallback = async () = {
      // 1. 현재 세션 정보 가져오기
      const {
        data: {session},error: sessionError,} = await supabase.auth.getSession();
    }
  }, []);
  return (
    <main className="w-full h-full min-h-180 flex items-center justify-center">
      로그인을 진행 중입니다.
    </main>
  );
}
