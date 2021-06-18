import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Deleted } from "../SubComponents";

export default function DeleteUser(user) {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const url = `http://localhost:4000/${user}`;
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userName,
      password,
    };

    const result = await axios.delete("delete", url, data);

    const message = result.data.message;

    if (message === "success") {
      dispatch(Deleted());
    }
  };

  return (
    <div className="Delete">
      <h3>Delete User</h3>
      <form action="submit" autoComplete="off">
        <input
          type="text"
          className="userName"
          name="userName"
          placeholder="Enter first name..."
          onChange={(e) => setuserName(e.target.value)}
          required
        />
        <input
          type="text"
          className="password"
          name="password"
          placeholder="Enter password..."
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Delete
        </button>
      </form>
    </div>
  );
}
