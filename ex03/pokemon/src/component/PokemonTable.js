import React from "react";

export default function PokemonTable({
  stats = {
    hp: "-",
    attack: "-",
    defense: "-",
    specialattack: "-",
    specialdefense: "-",
    speed: "-",
  },
}) {
  const theaddata = Object.keys(stats).map((stat) => {
    return <td key={stat}>{stat.toUpperCase()}</td>;
  });
  const tdata = Object.values(stats).map((stat, index) => {
    return <td key={index}>{stat}</td>;
  });

  return (
    <div className="pokemontable">
      <table>
        <thead>
          <tr>{theaddata}</tr>
        </thead>
        <tbody>
          <tr>{tdata}</tr>
        </tbody>
      </table>
    </div>
  );
}
