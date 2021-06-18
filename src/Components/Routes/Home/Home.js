import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import healthcare from "../../../assets/healthcare.png";
import { fetchDoctors, fetchPatients, Appointment } from "../Routes";
import Dashboard from "./SubComponents/Dashboard/Dashboard";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPatients());
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div id="Home">
      <img src={healthcare} alt="health care" style={styles.img} />
      <Dashboard />
      <Appointment />
    </div>
  );
};

export default Home;

const styles = {
  img: {
    width: "25%",
  },
};
