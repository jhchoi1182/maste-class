import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { users } from "../components/db";

const Home = () => {
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log(readSearchParams.has("users"));
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
