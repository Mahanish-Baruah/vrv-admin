import { useEffect, useState } from "react";
import useUsersStore from "../store/usersStore";
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa6";
import useRolesStore from "../store/rolesStore";

function Users() {
  const { users, fetchUsers } = useUsersStore();
  const { roles, fetchRoles } = useRolesStore();
  const [role, setRole] = useState("");

  useEffect(() => {
    console.log("useEffect");
    fetchUsers();
    fetchRoles();
  }, []);

  useEffect(() => {
    console.log(role);
  }, [role]);

  return (
    <div>
      <h1 className="text-3xl">Users</h1>
      <div className="my-6 overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{item.data.name}</td>
                <td>{item.data.email}</td>
                <td>{item.data.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-primary h-12"
        onClick={() => {
          const modal = document.getElementById(
            "create_user_modal",
          ) as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
          } else {
            console.error("Modal element not found");
          }
        }}
      >
        Create User
      </button>
      <dialog id="create_user_modal" className="modal">
        <div className="modal-box flex flex-col gap-4">
          <h2 className="text-lg font-bold">Create New User</h2>
          <label className="input input-bordered flex items-center gap-2">
            <FaUser />
            <input type="text" className="grow" placeholder="Enter Name" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaEnvelope />
            <input type="text" className="grow" placeholder="Enter Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaKey />
            <input type="text" className="grow" placeholder="Enter Password" />
          </label>
          <select
            className="select select-bordered w-full"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              console.log(role);
            }}
          >
            <option disabled selected>
              Choose Role
            </option>
            {roles.map((item) => (
              <option key={item.data.id} value={item.data.id}>
                {item.data.id.charAt(0).toUpperCase() + item.data.id.slice(1)}
              </option>
            ))}
          </select>
          <button className="btn btn-primary">Confirm</button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Users;
