import React from "react";
import { useState } from "react";
import { Nav } from "../../components/Nav";

export default function Users() {
  const [users, setusers] = useState([]);
  const [user, setuser] = useState("");
  const loadAllData = () => {
    fetch("api/users")
      .then((res) => res.json())
      .then((data) => setusers(data));
  };
  const handAddUser = () => {
    fetch("api/users", {});
  };
  return (
    <div>
      <Nav></Nav>
      <h1>All Users</h1>
      <div>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <button onClick={handAddUser}>Add User</button>
      </div>
      <button onClick={loadAllData}>Load Users</button>
      {users.map((user) => {
        return (
          <>
            <h2>
              {user.id}: {user.name}
            </h2>
          </>
        );
      })}
    </div>
  );
}
