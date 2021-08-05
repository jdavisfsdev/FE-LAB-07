import { useState, useEffect } from 'react';
import { getCharacters } from '../../services/getCharacters';

export default function useCharacters(page) {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    const charactersArray = await getCharacters(page);
    await setCharacters(charactersArray);
    await setLoading(false);
  }, [page]);

  return { loading, characters, page };
}
