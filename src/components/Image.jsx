import React from 'react';
import useCharacter from './Hooks/useCharacter';
import { useParams } from 'react-router-dom';

export default function Image() {
  const { id } = useParams();
  const { loading, character } = useCharacter(id);

  if(loading) return <h1>Loading...</h1>;
  
  return <img src={character.image} alt={character.name} />;
}
