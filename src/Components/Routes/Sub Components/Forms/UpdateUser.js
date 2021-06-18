import axios from "axios";
import { useDispatch } from "react-redux";
import { Updated } from "../SubComponents";
import React, { useState, useEffect } from "react";

export default function Update() {
  const [userData, setuserData] = useState({});
  const [user, setuser] = useState("patient");
  const url = `http://localhost:4000/`;
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const update = await axios.put(
      `${url}${user}/${userData.userName}`,
      userData
    );

    if (update.data.message === "success") dispatch(Updated());
  };

  const handleChange = (e) => {
    const type = e.target.name;
    const value = e.target.value;
    userData[type] = value;
  };

  return (
    <div className="update">
      <h3>Update Information</h3>
      <form action="submit" autoComplete="on">
        <div id="form-flex">
          <div className="form-group">
            <label htmlFor="user">User </label>
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
        </div>
        <div id="form-flex">
          <div id="form1sthalf">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className={"form-control form-control-lg"}
                autoComplete="name"
                placeholder="Enter your username"
                onChange={handleChange}
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
                placeholder="Enter your e-mail"
                autoComplete="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tel">Phone Num.</label>
              <input
                type="tel"
                id="phone"
                className={"form-control form-control-lg"}
                name="tel"
                placeholder="999xxxxx99"
                pattern="[0]{1}-[0-9]{10}"
                onChange={handleChange}
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
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group btn">
          <button
            className="btn btn-outline-primary btn-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
