/* https://rickandmortyapi.com/api/character/id(#) */

export default function getCharacter(id) {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
    (response) => response.json()
  );
}
