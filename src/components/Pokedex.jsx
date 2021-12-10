import axios from "axios";
import { useState, useEffect } from "react";
import PokedexEntry from './PokedexEntry'

const Pokedex = (props) => {
  const [pokemons, setPokemons] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=200');
      setPokemons(result.data);
    }
    fetchData();
  }, [])
  return (
    <div className="grid grid-cols-3 gap-2 my-4">
      {pokemons.results && pokemons.results.map((pokemon, index) => {
       return <PokedexEntry
          key={pokemon.name}
          id={index + 1}
          name={pokemon.name}
           />
      })}
    </div>
  );
};

export default Pokedex;
