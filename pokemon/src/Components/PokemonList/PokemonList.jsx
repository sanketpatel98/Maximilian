import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import dummyData from "../../assets/dummyData";
import classes from "./PokemonList.module.css"

export default function PokemonList() {
  return (
    <div>
      <div>
        <h2>Pokemons</h2>
      </div>
      <div className={classes.pokemonList}>
        {dummyData &&
          dummyData.map((data) => <Pokemon pokemon={data} key={data.id} />)}
      </div>
    </div>
  );
}
