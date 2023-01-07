import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../components/db";

const User = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with id {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <Link to="followers">팔로워</Link>
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
};

export default User;
