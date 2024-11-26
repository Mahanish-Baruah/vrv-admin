import { NavLink } from "react-router";

function Sidebar() {
  return (
    <>
      <aside className="flex h-dvh flex-col gap-6 p-10">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <button className="btn h-12 w-60">Dashboard</button>
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <button className="btn h-12 w-60">Users</button>
        </NavLink>
        <NavLink
          to="/roles"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <button className="btn h-12 w-60">Roles</button>
        </NavLink>
      </aside>
    </>
  );
}

export default Sidebar;
