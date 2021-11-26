import { Messages, SendMessage } from "./Components/Components";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "./Components/Components";
import { Open } from "../Components";
import React from "react";
import "./ChatBot.css";
function ChatBot() {
  const chatbot = useSelector((state) => state.navbarReducer.showChatbot);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(Open());
  };

  return (
    <div className="chatbot-container">
      {chatbot ? (
        <div id="ChatBot" className="bg-dark">
          <div className="min" onClick={handleClick}>
            <Header />
          </div>
          <Messages user="You" />
          <SendMessage user="You" />
        </div>
      ) : (
        <img
          id="bot-img"
          src="https://img.icons8.com/dusk/64/000000/bot--v2.png"
          alt="Bot"
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default ChatBot;
