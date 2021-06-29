import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import healthcare from "../../../assets/healthcare.png";
import { fetchDoctors, fetchPatients, Appointment, SignIn } from "../Routes";
import Dashboard from "./SubComponents/Dashboard/Dashboard";
import "./Home.css";

const Home = () => {
  const signedIn = useSelector((state) => state.signInReducer.userSignedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPatients());
    dispatch(fetchDoctors());
  }, [dispatch]);

  useEffect(() => {
    try {
      if (!signedIn) {
        const token = localStorage.getItem("token");
        if (token) dispatch(SignIn({ token: token }));
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, signedIn]);

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
