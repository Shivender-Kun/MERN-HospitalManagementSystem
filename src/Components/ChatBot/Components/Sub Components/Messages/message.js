const message = (i, index, user) => {
  return (
    <div
      key={index}
      id="parent-msg-container"
      className={i.user === "You" ? "Right" : "Left"}
    >
      <div id="messageContainer" className={user === "You" ? user : "Other"}>
        <p className="message">{i.message}</p>
      </div>
    </div>
  );
};

export default message;
