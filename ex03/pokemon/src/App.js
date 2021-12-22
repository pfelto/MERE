import { useState } from "react";
import PokemonForm from "./component/PokemonForm";
import PokemonBox from "./component/PokemonBox";
import ErrorBoundary from "./ErrorBoundary";
import PokemonErrorView from "./component/PokemonErrorView";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [completedSearch, setCompletedSearch] = useState("");

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompletedSearch(inputSearch);
  };

  const resetFunction = () => {
    setInputSearch("");
    setCompletedSearch("");
  };

  return (
    <div className="App">
      <div className="header">
        <PokemonForm
          inputSearch={inputSearch}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <p>Out of ideas? Try Pikachu, Charizard, or Ninetales.</p>
      </div>
      <ErrorBoundary
        FallbackComp={PokemonErrorView}
        key={completedSearch}
        resetFunction={resetFunction}
      >
        <PokemonBox completedSearch={completedSearch} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
