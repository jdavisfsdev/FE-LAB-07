import { useState, useEffect } from 'react';
import { getCharacter } from '../../services/getCharacter';

export default function useCharacter(id) {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  useEffect(async () => {
    const characterArray = await getCharacter(id);
    await setCharacter(characterArray);
    await setLoading(false);
  }, []);

  return { loading, character };
}
