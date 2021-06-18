import React, { useState, useEffect } from "react";
import { SignIn } from "../Routes";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Signin() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [userType, setuserType] = useState("patient");
  const [wrongIdPass, setwrong] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const signIn = useSelector((state) => state.signInReducer);

  useEffect(() => {
    if (signIn.userSignedIn !== "") {
      setwrong(false)
      history.push("/myaccount");
    }
    if (signIn.signInFailed !== "") {
      setwrong(true);
    }
  }, [signIn, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      userName,
      password,
      userType,
    };

    dispatch(SignIn(data));
  };

  return (
    <React.Fragment>
      <h3 id="regForm">Sign in Form</h3>

      <form action="submit" autoComplete="on">
        <div className="form-group">
          <label htmlFor="user">User</label>
          <select
            name="user"
            className={"form-control form-control-lg"}
            value={userType}
            onChange={(e) => setuserType(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className={"form-control form-control-lg"}
            autoComplete="on"
            placeholder="Enter your username"
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className={"form-control form-control-lg"}
            placeholder="Enter new password"
            autoComplete="on"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        {wrongIdPass && (
          <div className=" alert-danger">"Wrong username or password !"</div>
        )}

        <div className="form-group btn">
          <button
            className="btn btn-outline-primary btn-lg"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Sign in
          </button>
        </div>
      </form>
      <Link to="/signup">Create new account.</Link>
    </React.Fragment>
  );
}
