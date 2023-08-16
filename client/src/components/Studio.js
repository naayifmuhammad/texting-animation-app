import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Studio.css"; // Create this CSS file for styling
import PersonDetailsForm from "./PersonDetailsForm";
import ChatInput from "./ChatInput"; // Import the ChatInput component
import Message from "./Message";

const SidebarItem = ({ text }) => {
  return <div className="sidebar-item">{text}</div>;
};

const Studio = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [numPeople, setNumPeople] = useState(1);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNumPeopleChange = (newNumPeople) => {
    if (newNumPeople >= 1 && newNumPeople <= 10) {
      setNumPeople(newNumPeople);
    }
  };

  return (
    <div className="studio-container">
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <SidebarItem text=" " />
        <div className="sidebar-section">
          <div className="people-count-container">
            <div className="input-label">People in chat:</div>
            <div className="num-people-input">
              <button onClick={() => handleNumPeopleChange(numPeople - 1)}>
                -
              </button>
              <input
                type="number"
                value={numPeople}
                onChange={(e) =>
                  handleNumPeopleChange(parseInt(e.target.value))
                }
                min="1"
                max="5"
                className="people-input"
              />
              <button onClick={() => handleNumPeopleChange(numPeople + 1)}>
                +
              </button>
            </div>
          </div>
        </div>
        {/* Add a section for each person */}
        {[...Array(numPeople)].map((_, index) => (
          <PersonDetailsForm key={index} index={index} />
        ))}
      </div>
      <div className={`content ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <FaBars />
        </div>
        {/* Display the list of messages */}
        <div className="chat-screen">
          {messages.map((message, index) => (
            <Message
              key={index}
              senderNo={message.senderNo}
              text={message.text}
            />
          ))}
        </div>
      </div>
      {!isSidebarOpen && (
        <div className="chat-input-container studio">
          <ChatInput messages={messages} setMessages={setMessages} />
        </div>
      )}
    </div>
  );
};

export default Studio;
