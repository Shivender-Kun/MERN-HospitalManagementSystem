import { UserCard, LogOut } from "../Routes";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import "./User.css";

function User() {
  const user = useSelector((state) => state.signInReducer.userData);
  const token = useSelector((state) => state.signInReducer.token);

  useEffect(() => {
    try {
      const oldToken = localStorage.getItem("token");
      if ((!oldToken && token) || (oldToken !== token && token))
        localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

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
