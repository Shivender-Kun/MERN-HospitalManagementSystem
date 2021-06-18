import "./Admin.css";
import React from "react";
import { Doctors, Patients, LogOut } from "../../Routes";

const Admin = () => {
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
