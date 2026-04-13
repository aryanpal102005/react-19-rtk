import React from "react";
import { Link } from "react-router-dom";
import { users } from "./data";

export default function UserList() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
}