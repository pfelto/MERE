import React from "react";

export const CharacterErrorView = ({ message }) => {
  return (
    <div className="box">
      <img
        className="mortyimg red"
        src="/781815.png"
        alt="Rick and Morty Character"
      ></img>
      <div className="mortyinfo red">
        <h1>XXX</h1>
        <div>{message}</div>
      </div>
    </div>
  );
};
