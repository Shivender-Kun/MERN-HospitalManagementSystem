import { Doctors, Patients, LogOut } from "../../Routes";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import "./Admin.css";

const Admin = () => {
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
    <div id="Admin">
      <h2>Admin Area</h2>
      <div className="allUsers">
        <Doctors />
        <Patients />
      </div>
      <div className="logout_btn">
        <LogOut />
      </div>
    </div>
  );
};

export default Admin;
