import React, { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa"; // Import the send icon
import "./ChatInput.css";

const ChatInput = ({ messages, setMessages }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== "") {
      // Check if the message is not empty or whitespace
      const newMessage = {
        senderNo: 1, // Change this to the appropriate sender number
        text: message,
      };
      setMessages([...messages, newMessage]); // Add the new message to the messages array
      setMessage(""); // Clear the input field after sending
    }
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button className="send-button" onClick={handleSendClick}>
        <FaRegPaperPlane />
      </button>
    </div>
  );
};

export default ChatInput;
