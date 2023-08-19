import React, { useState } from "react";
import "./PersonDetailsForm.css";

const PersonDetails = ({ index, updatePersonDetails }) => {
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
    }
  };

  const handleSave = () => {
    const updatedDetails = { name, profilePicture };
    updatePersonDetails(index, updatedDetails);
  };

  return (
    <div className="person-details">
      <div className="input-label">{index}</div>
      <input
        type="text"
        placeholder="Name"
        className="name-input"
        value={name}
        onChange={handleNameChange}
      />
      <label className="file-label">
        Choose Profile Picture
        <input
          type="file"
          accept="image/*"
          className="file-input"
          onChange={handleFileInputChange}
        />
      </label>
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default PersonDetails;
