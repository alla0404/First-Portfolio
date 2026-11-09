import { AppFooter, AppHeader } from "./components/common";

export default function Rootlayout() {
  return (
    <div className="page">
      <AppHeader />
      <div className="container">
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
}
