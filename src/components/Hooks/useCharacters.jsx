import { useState, useEffect } from 'react';
import { getCharacters } from '../../services/getCharacters';

export default function useCharacters() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(async () => {
    const charactersArray = await getCharacters(page);
    await setCharacters(charactersArray);
    await setLoading(false);
  }, [page]);

  return { loading, characters };
}
