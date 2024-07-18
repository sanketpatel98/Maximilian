import React from "react";
import classes from "./PokemonDetails.module.css";

export default function PokemonDetails({ pokemon }) {
  const borderStyle = {
    border: `5px solid ${getColor(pokemon.level)}`, // Adjust color and other border properties as needed
  };
  return (
    <div>
      <div className={classes.pokemonName}>{pokemon.name}</div>
      <div className={classes.details}>
        <div className={classes.innerLeftColumn}>
          <div className={classes.type}>Type: {pokemon.type}</div>
          <div className={classes.pokemonAbilitiesContainer}>
            {pokemon.abilities &&
              pokemon.abilities.map((ability) => (
                <div
                  style={{
                    backgroundColor: ability.color,
                    color: ability.contrastColor,
                  }}
                  className={classes.pokemonAbilityContainer}
                >
                  {ability.name}
                </div>
              ))}
          </div>
          <div className={classes.circleDivision} style={borderStyle}>
            <div className={classes.pokemonLevel}>{pokemon.level}</div>
            <div className={classes.constantLevel}>Level</div>
          </div>
        </div>

        <div className={classes.innerRightColumn}>
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className={classes.pokemonImage}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
function getColor(value) {
    const clampedValue = Math.max(1, Math.min(50, value));
    const hue = (1 - clampedValue / 50) * 120;
    return `hsl(${hue}, 100%, 50%)`;
  }