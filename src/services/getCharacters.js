/* eslint-disable max-len */
export async function getCharacters(page) {
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?page=${page}`);
  const json = await res.json();
  return json;
}
