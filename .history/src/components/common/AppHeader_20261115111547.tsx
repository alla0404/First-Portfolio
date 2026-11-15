import { NavLink, useNavigate } from "react-router";
import { useAuthStore } from "@/stores";
import { Separator } from "../ui";
import { toast } from "sonner";

function AppHeader() {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);

  const reset = useAuthStore((state) => state.reset);

  const handleLogout = async () => {
    try {
      await reset(); // Zustnd + Supabase 모두 로그아웃

      toast.success("로그아웃 되었습니다.");
      navigate("/sign-in");
    } catch (error) {
      console.error(error);
      toast.error("로그아웃 중 오류가 발생했습니다.");
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-20 bg-[#121212]">
      <div
        className="
          w-full max-w-332 mx-auto
          flex flex-col gap-3
          px-4 py-3
          sm:px-6
          md:flex-row md:items-center md:justify-between
        "
      >
        {/* 로고 + PC 네비게이션 + 로그인 UI */}
        <div className="flex min-w-0 items-center justify-between gap-4">
          {/* 로고 */}
          <img
            src="/assets/images/googy.png"
            alt="@googy"
            className="w-13 h-13 shrink-0 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* PC 메뉴 */}
          <nav className="hidden md:flex items-center gap-5 whitespace-nowrap">
            <NavLink to="/" className="font-semibold">
              포트폴리오
            </NavLink>

            <NavLink to="/paper-hanger" className="font-semibold">
              도배하는 개발자 (소개)
            </NavLink>

            <NavLink to="/insight" className="font-semibold">
              토픽 인사이트
            </NavLink>
          </nav>

          {/* 로그인 UI */}
          {user ? (
            <div className="flex shrink-0 items-center gap-2 md:gap-5">
              {/* 이메일은 PC에서만 표시 */}
              <span className="hidden md:block max-w-56 truncate">
                {user.email}
              </span>

              <Separator
                orientation="vertical"
                className="hidden md:block h-4!"
              />

              <button
                type="button"
                onClick={handleLogout}
                className="whitespace-nowrap cursor-pointer font-semibold"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <NavLink to="/sign-in" className="whitespace-nowrap">
              로그인
            </NavLink>
          )}
        </div>

        {/* 모바일 메뉴 */}
        <nav
          className="
          flex md:hidden
          items-center gap-5
          overflow-x-auto
          whitespace-nowrap
          pb-1
        "
        >
          <NavLink to="/" className="font-semibold shrink-0">
            포트폴리오
          </NavLink>

          <NavLink to="/paper-hanger" className="font-semibold shrink-0">
            도배하는 개발자 (소개)
          </NavLink>

          <NavLink to="/insight" className="font-semibold shrink-0">
            토픽 인사이트
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export { AppHeader };
