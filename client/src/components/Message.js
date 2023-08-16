import React from "react";
import "./Message.css";

const Message = ({ senderNo, text }) => {
  const isSender = senderNo === 1; // Determine if the message is sent by the user (person 1)

  return (
    <div className={`message-container ${isSender ? "sender" : "other"}`}>
      <div className={`message-bubble ${isSender ? "sender" : "other"}`}>
        {text}
      </div>
    </div>
  );
};

export default Message;
