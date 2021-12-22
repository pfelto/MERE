import React from "react";

export default function PokemonTitle({
  pnum = "",
  pspecies = "",
  status = "",
}) {
  return (
    <div className="pokemontitle">
      <h1>
        {pnum
          ? `${pspecies} (${pnum})`
          : status === "loading"
          ? `Loading... ${pspecies}`
          : status === "rejected"
          ? `Error :(`
          : `No Pokemon Yet (xxx)`}
      </h1>
    </div>
  );
}
