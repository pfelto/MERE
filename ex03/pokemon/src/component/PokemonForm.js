import React from "react";

export default function PokemonForm({
  pokemonName,
  handleSubmit,
  handleChange,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="pokemon"
        type="text"
        placeholder="Search for Pokemon by name..."
        value={pokemonName}
        onChange={handleChange}
        autoFocus
      ></input>
      <input type="submit"></input>
    </form>
  );
}
