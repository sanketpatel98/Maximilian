import React from "react";
import classes from "./Pokemon.module.css";

export default function Pokemon({ pokemon }) {
  console.log(pokemon.abilities[0].name);
  const borderStyle = {
    border: `5px solid ${getColor(pokemon.level)}`, // Adjust color and other border properties as needed
  };
  return (
    <div className={classes.conatainer}>
      <div className={classes.leftColumn}>
        <div className={classes.pokemon}>
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className={classes.pokemonImage}
          />
        </div>
        <div className={classes.pokemon}>{pokemon.type}</div>
      </div>
      <div className={classes.rightColumn}> 
        <div className={classes.innerLeftColumn}>
          <div className={classes.pokemonName}>{pokemon.name}</div>
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
        </div>
        <div className={classes.innerRightColumn}>
          <div className={classes.circleDivision} style={borderStyle}>
            <div className={classes.pokemonLevel}>{pokemon.level}</div>
            <div className={classes.constantLevel}>Level</div>
          </div>
        </div>
      </div>
    </div>
  );
}
// {
//   id: 2,
//   name: "Charmander",
//   type: "Fire",
//   level: 22,
//   abilities: [
//     { name: "Blaze", color: "red" },
//     { name: "Solar Power", color: "red" }
//   ],
//   image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
//   weaknesses: ["Water", "Rock", "Ground"],
//   threats: [
//     { name: "Blastoise", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png" },
//     { name: "Onix", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png" },
//     { name: "Golem", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png" }
//   ]
// },
function getColor(value) {
  const clampedValue = Math.max(1, Math.min(50, value));
  const hue = (1 - clampedValue / 50) * 120;
  return `hsl(${hue}, 100%, 50%)`;
}
