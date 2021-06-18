import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Updated } from "../../../Routes";

function StatusBtn(data, user) {
  const url = `http://localhost:4000/`;
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const status = (data) =>
      data === "On Hold" || data === "Applied" ? "approve" : "hold";

    const update = await axios.put(
      `${url}${status(data.status)}/${user}/${data.userName}`
    );
    if (update.data.message === "success") {
      dispatch(Updated());
    }
  };

  return (
    <div className="form-group btn">
      <button className="btn btn-sm btn-warning" onClick={handleSubmit}>
        {data && data.status}
      </button>
    </div>
  );
}

export default StatusBtn;
