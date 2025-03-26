import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PUBLIC_KEY = 'your_public_key';
const HASH = 'your_hash';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`)
      .then((response) => setCharacter(response.data.data.results[0]))
      .catch((err) => console.error(err));
  }, [id]);

  if (!character) return <p>Loading character...</p>;

  return (
    <div>
      <h2>{character.name}</h2>
      <img
        src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <p>{character.description || 'No description available.'}</p>
    </div>
  );
};

export default CharacterDetails;
