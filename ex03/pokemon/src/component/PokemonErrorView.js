import React from "react";
import PokemonImage from "./PokemonImage";
import PokemonTable from "./PokemonTable";
import PokemonTitle from "./PokemonTitle";

export default function PokemonErrorView({ error }) {
  return (
    <div className="pokemonbox">
      <PokemonTitle status="rejected" />
      <PokemonImage />
      <PokemonTable />
    </div>
  );
}
