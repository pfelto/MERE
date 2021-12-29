import React from "react";

export const RandomCharacterButton = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      Random
    </button>
  );
};
