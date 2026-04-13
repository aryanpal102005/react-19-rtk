import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home Page</h1>
      <Link to="/users">Go to User List</Link>
    </div>
  );
}
