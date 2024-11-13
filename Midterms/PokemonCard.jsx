
import React from 'react';
import './index.css';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <h3>{pokemon.pokemon_species.name}</h3>
      {pokemon.imageUrl && <img src={pokemon.imageUrl} alt={pokemon.pokemon_species.name} />}
      <p><strong>Height:</strong> {pokemon.height}</p>
      <p><strong>Weight:</strong> {pokemon.weight}</p>
      <p><strong>Abilities:</strong> {pokemon.abilities.join(', ')}</p>
      <p><strong>Types:</strong> {pokemon.types.join(', ')}</p>
      <p><strong>Description:</strong> {pokemon.description}</p>
    </div>
  );
};

export default PokemonCard;
