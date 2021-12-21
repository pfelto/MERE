import { useState } from "react";
import PokemonForm from "./component/PokemonForm";
import { MemoPokemonBox } from "./component/PokemonBox";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [completedSearch, setCompletedSearch] = useState("");

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompletedSearch(inputSearch);
    setInputSearch("");
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
      <ErrorBoundary>
        <MemoPokemonBox completedSearch={completedSearch} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
