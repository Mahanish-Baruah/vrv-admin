import { Outlet } from "react-router";

function PageLayout() {
  return (
    <div className="w-full p-10">
      <Outlet />
    </div>
  );
}

export default PageLayout;
