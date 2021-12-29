import React, { useState } from "react";
import { CharacterInfoCard } from "./components/InfoCard/CharacterInfoCard";
import { FetchForm } from "./components/FetchForm";
import { RandomCharacterButton } from "./components/RandomCharacterButton";
import { NumberInput } from "./components/NumberInput";
import { FormSubmit } from "./components/FormSubmit";

export const FetchApp = () => {
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [initialSearch, setInitialSearch] = useState("");
  const [fetchStatus, getFetchStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedSearch(parseInt(initialSearch));
  }

  function handleChange(e) {
    setInitialSearch(e.target.value);
  }

  function handleRandom() {
    let randomNum = Math.floor(Math.random() * 826);
    setInitialSearch(randomNum);
    setSubmittedSearch(randomNum);
  }

  //i want to use component composition here and also need to disable buttons as needed

  //Disable on loading, need variable to track that
  const disabledByPending = fetchStatus === "pending";

  const disableSubmit = disabledByPending || !initialSearch;

  /*
    ||
    (initialSearch === submittedSearch &&
      ["resolved", "rejected"].includes(fetchStatus));
      */

  return (
    <div>
      <FetchForm
        initialSearch={initialSearch}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClick={handleRandom}
      />
      <CharacterInfoCard submittedSearch={submittedSearch} />
    </div>
  );
};
