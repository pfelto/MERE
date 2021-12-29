import React from "react";

export const FetchForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>{props.children}</form>
      <span>{props.title}</span>
    </div>
  );
};
