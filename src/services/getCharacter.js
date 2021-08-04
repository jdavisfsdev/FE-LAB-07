export async function getCharacter(id) {
  const res = await fetch (`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
  return res.json();
}
