import { NavLink } from "react-router";

function Sidebar() {
  return (
    <>
      <aside className="flex flex-col gap-6 bg-blue-100 p-10">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <button className="btn btn-primary w-60">Dashboard</button>
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <button className="btn btn-primary w-60">Users</button>
        </NavLink>
        <NavLink
          to="/roles"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <button className="btn btn-primary w-60">Roles</button>
        </NavLink>
      </aside>
    </>
  );
}

export default Sidebar;
