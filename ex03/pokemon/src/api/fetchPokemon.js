export default function fetchPokemon(pokemon) {
  return fetch("https://graphqlpokemon.favware.tech/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          {
            getPokemon(pokemon: ${pokemon}) {
                sprite
                num
                species
                baseStats {
                    hp
                    attack
                    defense
                    specialattack
                    specialdefense
                    speed
                  }
            }
          }
        `,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("here1");
      throw err;
    });
}

function fetchPokemon2(pokemon) {
  return fetch("https://graphqlpokemon.favware.tech/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            {
              pokemon(name: ${pokemon}) {
                number
                name

              }
            }
          `,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}
