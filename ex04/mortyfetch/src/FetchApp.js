import React, { useState } from "react";
import { CharacterInfoCard } from "./components/InfoCard/CharacterInfoCard";
import { FetchForm } from "./components/FetchForm";
import ErrorBoundary from "./ErrorBoundary";

export const FetchApp = () => {
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [initialSearch, setInitialSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedSearch(initialSearch);
  }

  function handleChange(e) {
    setInitialSearch(parseInt(e.target.value));
  }

  function handleRandom() {
    let randomNum = Math.floor(Math.random() * 826);
    setInitialSearch(randomNum);
    setSubmittedSearch(randomNum);
  }

  return (
    <div>
      <FetchForm
        initialSearch={initialSearch}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClick={handleRandom}
      />
      <ErrorBoundary key={submittedSearch}>
        <CharacterInfoCard submittedSearch={submittedSearch} />
      </ErrorBoundary>
    </div>
  );
};
