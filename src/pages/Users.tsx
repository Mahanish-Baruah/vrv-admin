import { useEffect } from "react";
import useUsersStore from "../store/usersStore";

function Users() {
  const { data, fetchData } = useUsersStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
