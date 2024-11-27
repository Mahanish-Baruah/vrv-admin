// import { useEffect } from "react";
// import useRolesStore from "../store/rolesStore";

function Roles() {
  // const { roles, fetchRoles } = useRolesStore();

  // useEffect(() => {
  //   fetchRoles();
  // }, [fetchRoles]);

  return (
    <div>
      <h1 className="text-3xl">Roles</h1>
      <div className="my-6 overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Role</th>
              <th>Permissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {roles.map((item, index) => ( */}
            <tr>
              <th>1</th>
              <td>Admin</td>
              <td></td>
            </tr>
            <tr>
              <th>2</th>
              <td>Manager</td>
              <td></td>
            </tr>
            <tr>
              <th>3</th>
              <td>Staff</td>
              <td></td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Roles;
