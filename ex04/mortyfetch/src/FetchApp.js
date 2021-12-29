import React, { useState } from "react";
import { CharacterInfoCard } from "./components/InfoCard/CharacterInfoCard";
import { FetchForm } from "./components/Form/FetchForm";
import { RandomCharacterButton } from "./components/Form/RandomCharacterButton";
import { NumberInput } from "./components/Form/NumberInput";
import { FormSubmit } from "./components/Form/FormSubmit";

export const FetchApp = () => {
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [initialSearch, setInitialSearch] = useState("");
  const [fetchStatus, setFetchStatus] = useState("idle");

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

  const disableSubmit =
    disabledByPending ||
    !initialSearch ||
    (initialSearch === submittedSearch &&
      ["resolved", "rejected"].includes(fetchStatus));

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
        title="Pick a Number between 1 and 826!"
      >
        <NumberInput
          disabled={disabledByPending}
          initialSearch={initialSearch}
          onChange={handleChange}
        />
        <FormSubmit disabled={disableSubmit}>Fetch</FormSubmit>
        <RandomCharacterButton
          disabled={disabledByPending}
          onClick={handleRandom}
        />
      </FetchForm>
      <CharacterInfoCard
        submittedSearch={submittedSearch}
        getStatus={setFetchStatus}
      />
    </div>
  );
};
