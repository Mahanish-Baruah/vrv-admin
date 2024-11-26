import { useEffect } from "react";
import useUsersStore from "../store/usersStore";

function Users() {
  const { data, fetchData } = useUsersStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
            {data.map((item, index) => (
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
        <div className="modal-box flex flex-col items-center justify-items-start">
          <h2 className="text-lg font-bold">Create New User</h2>
          <div className="modal-action">
            <form method="dialog">
              <label className="input input-bordered">
                <input type="text" className="grow" placeholder="Name" />
              </label>
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Confirm</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Users;
