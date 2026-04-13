import React from "react";
import { useParams, Link } from "react-router-dom";
import { users } from "./data";

export default function UserDetail() {
  const { id } = useParams();

  const user = users.find((u) => u.id == id);

  if (!user) {
    return <h2 style={{ textAlign: "center" }}>User Not Found</h2>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Detail</h1>
      <h2>Name: {user.name}</h2>
      <h3>Email: {user.email}</h3>
      <Link to="/users">Back</Link>
    </div>
  );
}
