import React from "react";

export const CharacterInfo = ({ data = {} }) => {
  return (
    <div className="mortyinfo">
      <h1>{data.name ? data.name : `???`}</h1>
      <div>body</div>
    </div>
  );
};
