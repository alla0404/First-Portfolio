import { Outlet } from "react-router";
import { AppFooter, AppHeader } from "../components/common";
import useAuthListener from "@/hooks/use-auth";

export default function Rootlayout() {
  useAuthListener();
  return (
    <div className="page">
      <AppHeader />
      <div className="container pt-28 md:pt-20">
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
}
