import axios from "axios";
import "./Appointment.css";
import React, { useState } from "react";
import { Updated, SignIn } from "../SubComponents";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Appointment = () => {
  const [description, setdescription] = useState("");
  const [toggleForm, settoggleForm] = useState(false);
  const url = `http://localhost:4000/`;
  const history = useHistory();

  const userName = useSelector(
    (state) => state.signInReducer.userData.userName
  );

  const signedUser = useSelector((state) => state.signInReducer.userSignedIn);

  const dispatch = useDispatch();

  const handleToggle = async (e) => {
    e.preventDefault();
    signedUser === "patient"
      ? settoggleForm(!toggleForm)
      : history.push("/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userName,
      description,
      opr: "update",
    };
    const update = await axios.post(`${url}book/patient`, data);
    if (update.data.message === "success") {
      dispatch(Updated());
      dispatch(SignIn(data));
      setdescription("");
      settoggleForm(false);
    }
  };

  return (
    <div className="appointment">
      <button className="btn btn-warning" onClick={handleToggle}>
        Book Appointment?
      </button>
      {toggleForm && (
        <form action="submit" autoComplete="on">
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => setdescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group btn">
            <button
              className="btn btn-outline-primary btn-lg"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Appointment;
