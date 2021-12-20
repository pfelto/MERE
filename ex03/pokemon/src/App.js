import { useState } from "react";

function App() {
  const [searchString, setSearchString] = useState("");

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("hi");
            setSearchString("");
          }}
        >
          <input
            id="pokemon"
            type="text"
            placeholder="Search for Pokemon by name..."
            value={searchString}
            onChange={handleChange}
          ></input>
          <input type="submit"></input>
        </form>
        <p>Out of ideas? Try Pikachu, Charizard, or Ninetales.</p>
      </div>
      <div className="pokemonbox">
        <div className="pokemontitle">
          <h1>No Pokemon Yet! (xxx)</h1>
        </div>
        <div className="pokemonimg">
          <img src="https://via.placeholder.com/150" alt="pokemon"></img>
        </div>
        <div className="pokemontable">
          <table>
            <thead>
              <tr>
                <td>Ability</td>
                <td>Type</td>
                <td>Damage</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
