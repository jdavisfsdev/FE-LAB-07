import React from 'react';
import { Link } from 'react-router-dom';
import Character from './Character';
import useCharacters from './Hooks/useCharacters';

export default function List() {
  const { loading, characters } = useCharacters();
  
  if(loading) return <h1>Loading...</h1>;
  
  const characterList = characters.map((character) => (
    <li key={character._id}>
      <Link to={`/${character._id}`}>
        <Character 
          _id={character._id}
          name={character.name}
          image={character.image} />
      </Link>
    </li>
  ));


  return (
    <ul>
      {characterList}    
    </ul>
  );
}
