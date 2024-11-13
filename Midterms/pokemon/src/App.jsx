import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import Footer from './Footer'; 
import Header from './Header'; 
import './index.css';

const REGIONS = {
  kanto: 2,
  johto: 3,
  hoenn: 4,
  sinnoh: 5,
};

const REGION_ENTRY_RANGES = {
  kanto: [1, 40],
  johto: [41, 80],
  hoenn: [81, 120],
  sinnoh: [121, 160],
};

const App = () => {
  const [region, setRegion] = useState('kanto');
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    fetchPokemonData();
  }, [region]);

  useEffect(() => {
    
    if (searchTerm) {
      setFilteredPokemons(
        pokemons.filter((pokemon) =>
          pokemon.pokemon_species.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredPokemons(pokemons);
    }
  }, [searchTerm, pokemons]);

  const fetchPokemonData = async () => {
    setLoading(true);
    try {
      const regionId = REGIONS[region];
      const response = await axios.get(`https://pokeapi.co/api/v2/pokedex/${regionId}/`);
      const pokemonEntries = response.data.pokemon_entries;

      const [start, end] = REGION_ENTRY_RANGES[region];

      const filteredEntries = pokemonEntries.filter(
        (entry) => entry.entry_number >= start && entry.entry_number <= end
      );

      const pokemonWithDetails = await Promise.all(
        filteredEntries.map(async (entry) => {
          const [pokemonDetails, speciesDetails] = await Promise.all([
            axios.get(`https://pokeapi.co/api/v2/pokemon/${entry.pokemon_species.name}/`),
            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${entry.pokemon_species.name}/`),
          ]);

          const englishDescription = speciesDetails.data.flavor_text_entries.find(
            (entry) => entry.language.name === 'en'
          );

          return {
            ...entry,
            imageUrl: pokemonDetails.data.sprites.front_default,
            height: pokemonDetails.data.height,
            weight: pokemonDetails.data.weight,
            abilities: pokemonDetails.data.abilities.map((ability) => ability.ability.name),
            types: pokemonDetails.data.types.map((type) => type.type.name),
            description: englishDescription ? englishDescription.flavor_text : 'No description available.',
          };
        })
      );

      setPokemons(pokemonWithDetails);
      setFilteredPokemons(pokemonWithDetails);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
    setLoading(false);
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="app">
      <Header /> {}
      
      <div className="controls">
        <div className="search-control">
          <label>Search Pokémon: </label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Enter Pokémon name"
          />
        </div>
        <div className="region-control">
          <label>Select Region: </label>
          <select value={region} onChange={handleRegionChange}>
            <option value="kanto">Kanto</option>
            <option value="johto">Johto</option>
            <option value="hoenn">Hoenn</option>
            <option value="sinnoh">Sinnoh</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="pokemon-list">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.entry_number} pokemon={pokemon} />
          ))}
        </div>
      )}

      <Footer /> {}
    </div>
  );
};

export default App;
