import React from "react";

export const FormSubmit = (props) => {
  return (
    <button type="submit" disabled={props.disabled}>
      {props.children}
    </button>
  );
};
