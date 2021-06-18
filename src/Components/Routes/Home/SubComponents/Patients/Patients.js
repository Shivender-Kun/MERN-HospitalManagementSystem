import React from "react";
import table from "../Table/Table";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Patients = () => {
  const patients = useSelector((state) => state.patientReducer.data);
  const signedUser = useSelector((state) => state.signInReducer.userSignedIn);

  return (
    <div id="Patients">
      <h2>Other users</h2>
      <div className="table-responsive">
        <Table bordered hover responsive variant="danger">
          <thead color="primary-color">
            <tr>
              <th>Name</th>
              <th>Appointment</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {patients !== undefined && table(patients, signedUser, "patient")}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Patients;
