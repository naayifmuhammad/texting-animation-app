import React from "react";
import "./UserSelectionPopup.css"; // Create this CSS file for styling

const UserSelectionPopup = ({ users, onSelectUser, onClose }) => {
  return (
    <div className="user-selection-popup">
      <div className="popup-header">Select User</div>
      <div className="user-list">
        {users.map((user) => (
          <div
            key={user.id}
            className="user-item"
            onClick={() => onSelectUser(user.id)}
          >
            {user.name}
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
