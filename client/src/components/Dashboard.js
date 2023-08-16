import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Import the Dashboard styles

const Dashboard = () => {
  // Dummy animation data for demonstration
  const dummyAnimations = [
    { id: 1, title: "Animation 1", description: "Description for Animation 1" },
    { id: 2, title: "Animation 2", description: "Description for Animation 2" },
    { id: 3, title: "Animation 3", description: "Description for Animation 3" },
    { id: 4, title: "Animation 4", description: "Description for Animation 4" },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to the Dashboard</h1>
      <Link to="/studio" className="create-animation-link">
        Create New Animation
      </Link>
      <div className="animation-cards">
        {dummyAnimations.map((animation) => (
          <div className="animation-card" key={animation.id}>
            <h2 className="animation-card-title">{animation.title}</h2>
            <p className="animation-card-description">
              {animation.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
