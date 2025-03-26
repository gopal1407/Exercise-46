import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PUBLIC_KEY = 'your_public_key';
const HASH = 'your_hash';

const BrowseCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`)
      .then((response) => setCharacters(response.data.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Browse Characters</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {characters.map((char) => (
          <div key={char.id} style={{ width: '150px', margin: '10px', textAlign: 'center' }}>
            <Link to={`/character/${char.id}`}>
              <img
                src={`${char.thumbnail.path}/standard_medium.${char.thumbnail.extension}`}
                alt={char.name}
                style={{ width: '100%' }}
              />
              <p>{char.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCharacters;
