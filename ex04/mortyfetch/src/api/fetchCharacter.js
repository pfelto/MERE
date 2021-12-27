/* https://rickandmortyapi.com/api/character/id(#) */

export default function getCharacter(id) {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("404 Character Not Found. Enter id between 1 and 826");
      }
    })
    .then(
      (data) => {
        return data;
      },
      (err) => {
        throw err;
      }
    );
}
