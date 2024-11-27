import { useEffect, useState } from "react";
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa6";
import { useUserStore } from "../store/userStore";
import { RoleEnum } from "../types/types";
// import { useRoleStore } from "../store/roleStore";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
  role: RoleEnum;
};

function Users() {
  const { users, fetchUsers } = useUserStore();
  // const { roles, fetchRoles } = useRoleStore();

  const [role, setRole] = useState("");

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch());

  useEffect(() => {
    console.log("useEffect");
    fetchUsers();
    // fetchRoles();
  }, [fetchUsers]);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl">Users</h1>
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
      </div>
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
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                  {item.role === RoleEnum.admin ? null : (
                    <button className="btn btn-error">Delete</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog id="create_user_modal" className="modal">
        <div className="modal-box">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <h2 className="text-lg font-bold">Create New User</h2>
            <label className="input input-bordered flex items-center gap-2">
              <FaUser />
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter Name"
                    {...field}
                  />
                )}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <FaUser />
              <input
                type="text"
                className="grow"
                placeholder="Enter Name"
                {...register("name", { required: true })}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <FaEnvelope />
              <input
                type="text"
                className="grow"
                placeholder="Enter Email"
                {...register("email", { required: true })}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <FaKey />
              <input
                type="text"
                className="grow"
                placeholder="Enter Password"
                {...register("password", { required: true })}
              />
            </label>
            <select
              className="select select-bordered"
              value={role}
              // onChange={(e) => {
              //   setRole(e.target.value);
              //   console.log(role);
              // }}
              {...register("role", { required: true })}
            >
              <option value="" disabled>
                Choose Role
              </option>
              {/* {roles.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </option>
              ))} */}
              <option value={RoleEnum.admin}>Admin</option>
              <option value={RoleEnum.manager}>Manager</option>
              <option value={RoleEnum.staff}>Staff</option>
            </select>
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Users;
