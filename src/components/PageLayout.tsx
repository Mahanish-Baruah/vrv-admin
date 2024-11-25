import { Outlet } from "react-router";

function PageLayout() {
  return (
    <div className="w-full bg-blue-100 p-10">
      <Outlet />
    </div>
  );
}

export default PageLayout;
