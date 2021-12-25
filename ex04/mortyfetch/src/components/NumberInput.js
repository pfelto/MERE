import React from "react";

export const NumberInput = ({ initialSearch, onChange }) => {
  return (
    <input
      type="number"
      id="characternum"
      min={1}
      //max={826}
      value={initialSearch}
      onChange={onChange}
      placeholder="Pick a number!"
    ></input>
  );
};