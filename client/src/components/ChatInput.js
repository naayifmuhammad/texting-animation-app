import React, { useState, useRef } from "react";
import { FaRegPaperPlane } from "react-icons/fa"; // Import the send icon
import "./ChatInput.css";
import PersonDetails from "./PersonDetailsForm";

const ChatInput = ({ messages, setMessages }) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null); // Create a ref for the input field

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== "") {
      const newMessage = {
        senderNo: 1,
        text: message,
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown} // Attach the event listener
        className="chat-input"
        placeholder="Type a message..."
        ref={inputRef} // Attach the ref to the input field
      />
      <button className="send-button" onClick={handleSendClick}>
        <FaRegPaperPlane />
      </button>
    </div>
  );
};

export default ChatInput;
