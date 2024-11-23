import { Outlet } from "react-router";

function PageLayout() {
  return (
    <div className="w-full p-10 bg-slate-300">
      <Outlet />
    </div>
  );
}

export default PageLayout;
