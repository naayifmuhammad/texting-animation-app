import React from "react";
import "./PersonDetailsForm.css";

const PersonDetails = ({ index }) => {
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="person-details">
      <div className="input-label">{index + 1}</div>
      <input type="text" placeholder="Name" className="name-input" />
      <label className="file-label">
        Choose Profile Picture
        <input
          type="file"
          accept="image/*"
          className="file-input"
          onChange={handleFileInputChange}
        />
      </label>
    </div>
  );
};

export default PersonDetails;
