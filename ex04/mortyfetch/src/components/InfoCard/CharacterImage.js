import React from "react";

export const CharacterImage = ({ image }) => {
  return (
    <img
      className="mortyimg"
      src={image ? image : "https://via.placeholder.com/100"}
      alt="Rick and Morty Character"
    ></img>
  );
};
