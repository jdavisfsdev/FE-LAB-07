import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Character from './Character';
import { GrSubtractCircle } from 'react-icons/fa';
import useCharacters from './Hooks/useCharacters';

export default function List() {
  const [page, setPage] = useState(1);
  const { loading, characters } = useCharacters(page);
  
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
    <div>
      <>
        <button 
          disabled={page <= 1}
          onClick={() => setPage((prevPage) => prevPage - 1)}>
          -
        </button>
      </>
      <>
        Page: {page}
      </>
      <>
        <button onClick={() => setPage((prevPage) => prevPage + 1)}>
        +
        </button>
      </>
      <ul>
        {characterList}    
      </ul>
    </div>
  );
}
