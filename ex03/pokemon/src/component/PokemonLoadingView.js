import React from "react";
import PokemonImage from "./PokemonImage";
import PokemonTable from "./PokemonTable";
import PokemonTitle from "./PokemonTitle";

export default function PokemonLoadingView({ status, pokemonName }) {
  return (
    <div className="pokemonbox">
      <PokemonTitle status={status} pspecies={pokemonName} />
      <PokemonImage />
      <PokemonTable />
    </div>
  );
}
