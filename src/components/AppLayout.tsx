import Sidebar from "./Sidebar";
import PageLayout from "./PageLayout";

function AppLayout() {
  return (
    <>
      <div className="flex flex-row gap-10 px-10">
        <Sidebar />
        <PageLayout />
      </div>
    </>
  );
}

export default AppLayout;
