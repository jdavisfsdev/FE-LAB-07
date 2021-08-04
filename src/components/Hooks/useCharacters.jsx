import { useState, useEffect } from 'react';
import { getCharacters } from '../../services/getCharacters';

export default function useCharacters() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    const charactersArray = await getCharacters();
    await setCharacters(charactersArray);
    await setLoading(false);
  }, []);

  return { loading, characters };
}
