import { useState } from "react";
import PokemonForm from "./component/PokemonForm";
import fetchPokemon from "./api/fetchPokemon";

const initPokemon = {
  name: "",
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

function App() {
  const [pokemon, setPokemon] = useState(initPokemon);

  const handleChange = (e) => {
    setPokemon({ ...pokemon, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPokemon(pokemon.name.toLocaleLowerCase()).then((data) => {
      setPokemon({
        name: data.data.getPokemon.species,
        species: data.data.getPokemon.species,
        num: data.data.getPokemon.num,
        sprite: data.data.getPokemon.sprite,
        baseStats: {
          hp: data.data.getPokemon.baseStats.hp,
          attack: data.data.getPokemon.baseStats.attack,
          defense: data.data.getPokemon.baseStats.defense,
          specialattack: data.data.getPokemon.baseStats.specialattack,
          specialdefense: data.data.getPokemon.baseStats.specialdefense,
          speed: data.data.getPokemon.baseStats.speed,
        },
      });
    });
  };

  return (
    <div className="App">
      <div className="header">
        <PokemonForm
          pokemonName={pokemon.name}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <p>Out of ideas? Try Pikachu, Charizard, or Ninetales.</p>
      </div>
      <div className="pokemonbox">
        <div className="pokemontitle">
          <h1>
            {pokemon.num
              ? `${pokemon.species}! (${pokemon.num})`
              : `No Pokemon Yet! (xxx)`}
          </h1>
        </div>
        <div className="pokemonimg">
          <img
            src={
              pokemon.sprite
                ? pokemon.sprite
                : "https://via.placeholder.com/150"
            }
            alt="pokemon"
          ></img>
        </div>
        <div className="pokemontable">
          <table>
            <thead>
              <tr>
                <td>HP</td>
                <td>Attack</td>
                <td>Defense</td>
                <td>Special Attack</td>
                <td>Special Defense</td>
                <td>Speed</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pokemon.baseStats.hp}</td>
                <td>{pokemon.baseStats.attack}</td>
                <td>{pokemon.baseStats.defense}</td>
                <td>{pokemon.baseStats.specialattack}</td>
                <td>{pokemon.baseStats.specialdefense}</td>
                <td>{pokemon.baseStats.speed}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
