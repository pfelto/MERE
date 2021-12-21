import React from "react";

export default function PokemonTitle({ pnum, pspecies, isLoading }) {
  return (
    <div className="pokemontitle">
      <h1>
        {pnum
          ? `${pspecies} (${pnum})`
          : isLoading
          ? "Loading..."
          : `No Pokemon Yet (xxx)`}
      </h1>
    </div>
  );
}
