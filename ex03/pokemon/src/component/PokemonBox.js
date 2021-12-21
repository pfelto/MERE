import React, { useState, useEffect } from "react";
import PokemonTitle from "./PokemonTitle";
import PokemonImage from "./PokemonImage";
import PokemonTable from "./PokemonTable";
import fetchPokemon from "../api/fetchPokemon";

const initPokemon = {
  species: "",
  number: "",
  sprite: "",
  baseStats: {
    hp: "-",
    attack: "-",
    defense: "-",
    specialattack: "-",
    specialdefense: "-",
    speed: "-",
  },
};

function PokemonBox({ completedSearch }) {
  const [pokemon, setPokemon] = useState(initPokemon);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!completedSearch) {
      return;
    }
    setLoading(true);
    fetchPokemon(completedSearch.toLowerCase())
      .then((data) => {
        setPokemon({
          ...data.data.getPokemon,
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [completedSearch]);

  if (error) throw error;

  return (
    <div className="pokemonbox">
      <PokemonTitle
        pnum={pokemon.num}
        pspecies={pokemon.species}
        isLoading={isLoading}
      />
      <PokemonImage psprite={pokemon.sprite} />
      <PokemonTable stats={pokemon.baseStats} />
    </div>
  );
}

export const MemoPokemonBox = React.memo(PokemonBox);
