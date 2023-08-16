import React from "react";
import AnimationCard from "./AnimationCard";

const AnimationCards = () => {
  // Generate dummy animation data for demonstration
  const animations = [
    { id: 1, title: "Animation 1", description: "Description 1" },
    { id: 2, title: "Animation 2", description: "Description 2" },
    { id: 3, title: "Animation 3", description: "Description 3" },
    { id: 4, title: "Animation 4", description: "Description 4" },
  ];

  return (
    <div className="animation-cards">
      {animations.map((animation) => (
        <AnimationCard
          key={animation.id}
          title={animation.title}
          description={animation.description}
        />
      ))}
    </div>
  );
};

export default AnimationCards;
