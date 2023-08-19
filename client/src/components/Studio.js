import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "./Studio.css"; // Create this CSS file for styling
import PersonDetailsForm from "./PersonDetailsForm";
import ChatInput from "./ChatInput"; // Import the ChatInput component
import Message from "./Message";
import UserSelectionPopup from "./UserSelectionPopup"; // Import the UserSelectionPopup component

const SidebarItem = ({ text }) => {
  return <div className="sidebar-item">{text}</div>;
};

const Studio = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [numPeople, setNumPeople] = useState(1);
  const [personDetails, setPersonDetails] = useState({}); // Array to store person details
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const maxCount = 10;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.altKey && event.key === "u") {
        console.log(messages);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNumPeopleChange = (newNumPeople) => {
    if (newNumPeople >= 1 && newNumPeople <= maxCount) {
      setNumPeople(newNumPeople);
    }
  };

  // Function to update person details
  const updatePersonDetails = (id, updatedDetails) => {
    //console.log(`Updated details for id ${id}:`, updatedDetails);
    setPersonDetails((prevDetails) => {
      prevDetails[id] = updatedDetails;
      return prevDetails;
    });
  };

  const handleUserSelect = (selectedUserId) => {
    // Logic to assign the selected user to the message
    const updatedMessages = messages.map((message, index) => {
      if (index === selectedMessage) {
        return { ...message, senderNo: parseInt(selectedUserId) };
      }
      return message;
    });

    setMessages(updatedMessages);
    setIsPopupOpen(false);
  };

  const handlePopupClose = (isPopupOpen) => {
    setIsPopupOpen(!isPopupOpen);
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
                max={`"${maxCount}"`}
                className="people-input"
              />
              <button onClick={() => handleNumPeopleChange(numPeople + 1)}>
                +
              </button>
            </div>
          </div>
        </div>
        {[...Array(numPeople)].map((_, index) => (
          <PersonDetailsForm
            key={index + 1}
            index={index + 1}
            updatePersonDetails={updatePersonDetails} // Pass the updatePersonDetails function
            personDetails={personDetails} // Pass the personDetails array
          />
        ))}
      </div>
      <div className={`content ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <FaBars />
        </div>
        {/* Display the list of messages */}
        <div className="chat-screen">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-container ${
                message.senderNo === 1 ? "sender" : "other"
              }`}
              onClick={() => {
                setSelectedMessage(index); // Pass the index here instead of senderNo
                setIsPopupOpen(true);
              }}
            >
              <Message senderNo={message.senderNo} text={message.text} />
            </div>
          ))}
        </div>
      </div>
      {!isSidebarOpen && (
        <div className="chat-input-container studio">
          <ChatInput
            messages={messages}
            setMessages={setMessages}
            personDetails={personDetails} // Pass the personDetails array
          />
        </div>
      )}
      {isPopupOpen && (
        <div className="user-selection-popup-container">
          <UserSelectionPopup
            users={personDetails}
            onSelect={handleUserSelect}
            onClose={handlePopupClose}
          />
        </div>
      )}
    </div>
  );
};

export default Studio;
