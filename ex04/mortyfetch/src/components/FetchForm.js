import React from "react";
import { RandomCharacterButton } from "./RandomCharacterButton";
import { NumberInput } from "./NumberInput";

export const FetchForm = ({ initialSearch, onSubmit, onChange, onClick }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <NumberInput initialSearch={initialSearch} onChange={onChange} />
        <input type="submit"></input>
        <RandomCharacterButton onClick={onClick} />
        <p>Enter a number between 1 and 826!</p>
      </form>
    </div>
  );
};
