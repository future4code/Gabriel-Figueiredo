import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PokeCard = () => {
    const [pokemon, setPokemon] = useState({})

useEffect(() => {
    pegaPokemon(pokemon);
})
 
useEffect(() => {
    
    if (pokemon !== pokemon) {
        pegaPokemon(pokemon);
      }
    })

const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        console.log("TTTTTTt",response.data);
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return(
    <div>
    <p>{pokemon.name}</p>
    <p>{pokemon.weight} Kg</p>
    {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
    {pokemon.sprites && (
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    )}
  </div>
  )
}
export default PokeCard;