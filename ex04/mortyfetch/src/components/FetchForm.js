import React from "react";
import { RandomCharacterButton } from "./RandomCharacterButton";
import { NumberInput } from "./NumberInput";
import { FormSubmit } from "./FormSubmit";

export const FetchForm = ({ initialSearch, onSubmit, onChange, onClick }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <NumberInput initialSearch={initialSearch} onChange={onChange} />
        <FormSubmit disabled={!initialSearch} />
        <RandomCharacterButton onClick={onClick} />
      </form>
      <span>Enter a number between 1 and 826!</span>
    </div>
  );
};
