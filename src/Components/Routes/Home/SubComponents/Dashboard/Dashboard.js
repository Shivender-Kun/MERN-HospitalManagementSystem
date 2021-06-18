import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Dashboard.css";

const Dashboard = () => {
  const doctors = useSelector((state) => state.doctorReducer);
  const patients = useSelector((state) => state.patientReducer);

  const history = useHistory();

  const handleClick = () => {
    history.push("/doctors");
  };

  return (
    <div className="parent">
      {totalUsers("Doctors", doctors)}
      {totalUsers("Patients", patients)}
      {appointments("Booked", patients, booked)}
      {appointments("Approved", patients, approved)}

      <div className="form-group btn">
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          See all available doctors
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

const approved = (users) => {
  let appointments = 0;
  users.map((user) => {
    user.status !== "Not Applied" &&
      user.status !== "On Hold" &&
      appointments++;
    return null;
  });
  return appointments;
};

const booked = (users) => {
  let appointments = 0;
  users.map((user) => {
    user.status !== "Not Applied" && appointments++;
    return null;
  });

  return appointments;
};

const totalUsers = (header, user) => {
  return (
    <div className="card bg-primary text-white">
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h5 className="card-title">Total {header}</h5>
        <p className="card-text">
          {user.message === "success" && user.data.length}
        </p>
      </div>
    </div>
  );
};

const appointments = (header, user, func) => {
  return (
    <div className="card bg-primary text-white">
      <div className="card-header">{header}</div>
      <h5 className="card-title">Appointments</h5>
      <p className="card-text">
        {user.message === "success" && func(user.data)}
      </p>
    </div>
  );
};
