import "./Doctors.css";
import table from "../Table/Table";
import { Table } from "react-bootstrap";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDoctors, fetchPatients } from "../../../Routes";

const Doctors = () => {
  const doctors = useSelector((state) => state.doctorReducer.data);
  const signedUser = useSelector((state) => state.signInReducer.userSignedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    function getDocs() {
      if (doctors.length === 0) {
        dispatch(fetchDoctors());
        dispatch(fetchPatients());
      }
    }
    getDocs();
  }, [dispatch, doctors]);

  return (
    <div id="Doctors">
      <h2>List of Doctors available</h2>
      <div className="table-responsive">
        <Table bordered hover responsive variant="success">
          <thead color="primary-color">
            <tr>
              <th>Name</th>
              <th>Work</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {doctors !== undefined && table(doctors, signedUser, "doctor")}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Doctors;
