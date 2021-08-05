import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();
  return (
    <div>
      <Link to="/">
        <button>HOME</button>   
      </Link>   
      <button onClick={() => history.goBack()}>
        BACK TO PREVIOUS PAGE
      </button>
    </div>
  );
}
