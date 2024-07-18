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
      <hr />
      <div className={classes.pokemonWeaknessContainer}>
        <span className={classes.pokemonWeaknessesHeader}>Weaknesses</span>
        <div className={classes.pokemonWeaknessesList}>
          {pokemon.weaknesses &&
            pokemon.weaknesses.map((weakness) => (
              <div
                className={classes.pokemonWeaknesses}
                style={{
                  backgroundColor: weakness.color,
                  color: weakness.contrastColor,
                }}
              >
                {weakness.type}
              </div>
            ))}
        </div>
        <div className={classes.pokemonThreatList}>
          {pokemon.threats &&
            pokemon.threats.map((thret) => (
              <div className={classes.pokemonThreat}>
                <img
                  className={classes.pokemonThreatImg}
                  src={thret.image}
                ></img>
                <span>{thret.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
function getColor(value) {
  const clampedValue = Math.max(1, Math.min(50, value));
  const hue = (1 - clampedValue / 50) * 120;
  return `hsl(${hue}, 100%, 50%)`;
}
