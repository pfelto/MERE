import React, { useState, useEffect } from "react";
import fetchPokemon from "../api/fetchPokemon";
import PokemonInfoView from "./PokemonInfoView";
import PokemonIdleView from "./PokemonIdleView";
import PokemonLoadingView from "./PokemonLoadingView";

function PokemonBox({ completedSearch }) {
  const [pokemon, setPokemon] = useState(null);
  const [status, setStatus] = useState(completedSearch ? "loading" : "idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!completedSearch) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      fetchPokemon(completedSearch.toLowerCase())
        .then((data) => {
          setPokemon({
            ...data.data.getPokemon,
          });
          setStatus("ok");
        })
        .catch((err) => {
          setError(err);
          setStatus("rejected");
        });
    }, 3000);
  }, [completedSearch]);

  if (status === "ok") {
    return <PokemonInfoView pokemon={pokemon} />;
  } else if (status === "idle") {
    return <PokemonIdleView />;
  } else if (status === "loading") {
    return <PokemonLoadingView status={status} pokemonName={completedSearch} />;
  } else {
    throw error;
  }
}

export default PokemonBox;
