import React, { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import dummyData from "../../assets/dummyData";
import classes from "./PokemonList.module.css";
import Modal from "../Modal/Modal";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import pokemon from "../../assets/dummyData";

export default function PokemonList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setShowModal(false);
  };

  return (
    <div>
      <div>
        <h2>Pokemons</h2>
      </div>
      {/* <Modal show={showModal} onClose={closeModal}>
        <PokemonDetails pokemon={pokemon}/>
      </Modal> */}
      <div className={classes.pokemonList}>
        {dummyData &&
          dummyData.map((data) => (
            <div onClick={() => openModal(data)} style={{ cursor: 'pointer' }}>
              <Pokemon pokemon={data} key={data.id} />
            </div>
          ))}
      </div>
      <Modal show={showModal} onClose={closeModal}>
        <PokemonDetails pokemon={selectedPokemon} />
      </Modal>
    </div>
  );
}
