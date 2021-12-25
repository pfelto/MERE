import React from "react";
import { CharacterImage } from "./CharacterImage";

export const CharacterDataView = ({ data }) => {
  return (
    <div className="box">
      <CharacterImage image={data.image} />
    </div>
  );
};
