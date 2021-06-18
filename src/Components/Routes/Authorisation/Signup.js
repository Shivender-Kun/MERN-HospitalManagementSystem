import React, { useState } from "react";
import axios from "axios";
import { Added } from "../Routes";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const [userData, setuserData] = useState({});
  const [user, setuser] = useState("patient");
  const url = `https://hms-backend-server.herokuapp.com/signup?user=`;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const signup = await axios.post(`${url}${user}`, userData);
      if (signup.data.message === "success") {
        dispatch(Added());
        history.push("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    userData[name] = value;
  };

  return (
    <div className="Add">
      <h3>Registration Form</h3>
      <form action="submit" autoComplete="on">
        <div id="form-flex">
          <div className="form-group">
            <label htmlFor="user">User</label>
            <select
              name="user"
              className={"form-control form-control-lg"}
              value={user}
              onChange={(e) => setuser(e.target.value)}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              name="age"
              className={"form-control form-control-lg"}
              min="3"
              max="120"
              placeholder="Enter Age"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                alignItems: "center",
                width: "250px",
              }}
              onChange={handleChange}
            >
              <input type="radio" value="Male" name="gender" defaultChecked />
              Male
              <input type="radio" value="Female" name="gender" />
              Female
              <input type="radio" value="Other" name="gender" />
              Other
            </div>
          </div>
        </div>
        <div id="form-flex">
          <div id="form1sthalf">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className={"form-control form-control-lg"}
                autoComplete="name"
                placeholder="Enter name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                name="userName"
                className={"form-control form-control-lg"}
                autoComplete="username"
                placeholder="Enter username"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div id="form2ndhalf">
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                className={"form-control form-control-lg"}
                placeholder="Enter e-mail"
                autoComplete="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tel">Phone Num.</label>
              <input
                type="tel"
                id="phone"
                className={"form-control form-control-lg"}
                name="phoneNum"
                placeholder="999xxxxx99"
                pattern="[0-9]{10}"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className={"form-control form-control-lg"}
                placeholder="Enter new password"
                autoComplete="new-password"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        {user !== "patient" && (
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="form-group btn">
          <button
            className="btn btn-outline-primary btn-lg"
            type="submit form"
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </div>
      </form>
      <button
        className="btn btn-dark  btn-sm"
        onClick={() => history.push("/signin")}
      >
        Already a user?
      </button>
    </div>
  );
}
