import React from "react";
import { useDispatch } from "react-redux";
import { SignIn } from "../SubComponents";
import { useHistory } from "react-router-dom";
export default function LogOut() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(SignIn({ userType: "log out" }));
    localStorage.removeItem("token");
    history.push("/signin");
  };

  return (
    <div className="form-group btn">
      <button
        className="btn btn-outline-danger btn-sm  "
        type="logout"
        onClick={handleSubmit}
      >
        Logout
      </button>
    </div>
  );
}
