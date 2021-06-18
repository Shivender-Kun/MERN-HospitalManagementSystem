import ScrollToBottom from "react-scroll-to-bottom";
import { useSelector } from "react-redux";
import message from "./message";
import React from "react";
import "./Messages.css";

function Messages({ user }) {
  const messages = useSelector((state) => state.messageReducer.all);

  const messageList =
    messages &&
    messages.map((i, index) => {
      return message(i, index, user);
    });

  return (
    <ScrollToBottom className="messagesContainer bg-dark">
      {messageList}
    </ScrollToBottom>
  );
}

export default Messages;
