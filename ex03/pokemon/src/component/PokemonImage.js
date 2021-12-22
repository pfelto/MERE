import React from "react";

export default function PokemonImage({
  psprite = "",
  status = "",
  error = null,
}) {
  return (
    <div className="pokemonimg">
      <img
        src={psprite ? psprite : "https://via.placeholder.com/150"}
        alt="pokemon"
      ></img>
    </div>
  );
}
