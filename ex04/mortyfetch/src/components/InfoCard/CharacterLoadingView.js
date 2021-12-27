import React from "react";

export const CharacterLoadingView = () => {
  return (
    <div className="box">
      <div className="mortyimg">
        <div className="loader"></div>
      </div>
      <div className="mortyinfo">
        <div>Loading...</div>
      </div>
    </div>
  );
};
