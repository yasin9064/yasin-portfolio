"use client";

import React from "react";

interface AchievementCardProps {
  title: string;
  year: number;
  description: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, year, description }) => {
  return (
    <div className="achievement-card">
      <div className="achievement-card-year">{year}</div>
      <div className="achievement-card-body">
        <h3 className="achievement-card-title">{title}</h3>
        <p className="achievement-card-description">{description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;