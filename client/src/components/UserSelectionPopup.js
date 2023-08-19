import React from "react";
import "./UserSelectionPopup.css"; // Create this CSS file for styling

const UserSelectionPopup = ({ users, onSelect, onClose }) => {
  return (
    <div className="user-selection-popup">
      <div className="popup-header">Select User</div>
      <div className="user-list">
        {Object.keys(users).map((id) => (
          <div key={id} className="user-item" onClick={() => onSelect(id)}>
            {users[id].name}
          </div>
        ))}
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default UserSelectionPopup;
