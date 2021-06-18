import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { messageSent, messageReceived } from "../SubComponents";

function SendMessage({ user }) {
  const [message, setmessage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message === "") return;

    const data = {
      user,
      message,
    };

    const newMessage = await axios.post(
      "https://hms-backend-server.herokuapp.com/chat",
      data
    );

    setmessage("");
    dispatch(messageSent(data));
    dispatch(messageReceived(newMessage.data));
  };

  return (
    <form onSubmit={handleSubmit} className="send" style={styles.send}>
      <input
        required
        className="form-control"
        placeholder="Enter message..."
        value={message}
        onChange={(e) => setmessage(e.target.value)}
      />
      <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
        Send
      </button>
    </form>
  );
}

export default SendMessage;

const styles = {
  send: {
    marginTop: "10px",
    padding: "0px 20px",
    display: "flex",
    justifyContent: "center",
  },
};
