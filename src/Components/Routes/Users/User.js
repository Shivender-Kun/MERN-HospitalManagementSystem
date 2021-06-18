import React from "react";
import "./User.css";
import { useSelector } from "react-redux";
import { UserCard, LogOut } from "../Routes";

function User() {
  const user = useSelector((state) => state.signInReducer.userData);

  return (
    <div className="UserData">
      {user && <h2>Welcome, {user.name}</h2>}
      {user && <UserCard user={user} />}
      <div className="logout_btn">
        <LogOut />
      </div>
    </div>
  );
}

export default User;
