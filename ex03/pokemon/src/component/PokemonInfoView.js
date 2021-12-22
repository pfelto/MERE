import React from "react";
import PokemonImage from "./PokemonImage";
import PokemonTable from "./PokemonTable";
import PokemonTitle from "./PokemonTitle";

export default function PokemonInfoView({ pokemon }) {
  return (
    <div className="pokemonbox">
      <PokemonTitle pnum={pokemon.num} pspecies={pokemon.species} />
      <PokemonImage psprite={pokemon.sprite} />
      <PokemonTable stats={pokemon.baseStats} />
    </div>
  );
}
