import React from "react";
import PokemonImage from "./PokemonImage";
import PokemonTable from "./PokemonTable";
import PokemonTitle from "./PokemonTitle";

export default function PokemonIdleView() {
  return (
    <div className="pokemonbox">
      <PokemonTitle />
      <PokemonImage />
      <PokemonTable />
    </div>
  );
}
