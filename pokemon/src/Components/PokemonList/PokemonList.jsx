import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import dummyData from '../../assets/dummyData';

export default function PokemonList() {
    
  return (
    <div>
        <div><h2>Pokemons</h2></div>
        {dummyData && dummyData.map((data) => <Pokemon pokemon={data} key={data.id} />)}

    </div>
  )
}
