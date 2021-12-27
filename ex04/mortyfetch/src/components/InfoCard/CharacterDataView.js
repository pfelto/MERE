import React from "react";

export const CharacterDataView = ({ data }) => {
  return (
    <div className="box">
      <img
        className="mortyimg"
        src={data.image}
        alt="Rick and Morty Character"
      ></img>
      <div className="mortyinfo">
        <h1>{data.name}</h1>
        <span>
          #{data.id}, {data.status}, {data.species}, {data.gender}
        </span>
        <span>origin: {data.origin.name}</span>
        <span>location: {data.location.name}</span>
      </div>
    </div>
  );
};
