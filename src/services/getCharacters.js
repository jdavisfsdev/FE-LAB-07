/* eslint-disable max-len */
export async function getCharacters() {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  return res.json();
}
