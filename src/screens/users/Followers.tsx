import React from "react";
import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

const Followers = () => {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  return <div>여기는 {nameOfMyUser}의 팔로워</div>;
};

export default Followers;
