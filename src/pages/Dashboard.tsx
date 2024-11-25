import { useState } from "react";

function Dashboard() {
  const [value, setValue] = useState("");
  console.log("rerender");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default Dashboard;
