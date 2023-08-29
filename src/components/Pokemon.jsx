/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import FavoriteContext from "../Contexts/favoritesContext";

const Pokemon = (props) => {
  const [like, setLike] = useState(false);
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const imgPokemon =
    "https://play.pokemonshowdown.com/sprites/xyani/" + pokemon.name + ".gif";
  const onHeartClick = () => {
    if (!like) {
      setLike(true);
      updateFavoritePokemons(pokemon.name);
    } else {
      setLike(false);
    }
  };
  const type =
    "http://git.veekun.com/pokedex-media.git/tree/HEAD:/types/en" +
    pokemon.type +
    ".png";
  console.log();
  return (
    <>
      <div className="pokemon-card">
        <div className="pokemon-image-container">
          <img src={imgPokemon} alt={pokemon.name} className="pokemons-image" />
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
              {pokemon.types.map((type, index) => {
                return (
                  <div key={index} className="pokemon-type-text">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <button className="pokemon-heart-btn" onClick={onHeartClick}>
              {!favoritePokemons.includes(pokemon.name) ? (
                <AiOutlineHeart />
              ) : (
                <FcLike />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = styled.div`
  display: flex;
  //box-shadow:4px 4px 4px rgba(0,0,0,0);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;

  padding: 5px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    width: 80px;
    height: 80px;

    opacity: 1;
    //position: absolute;
    transition: opacity 500ms ease-in-out 0s;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const Img = styled.div`
  padding: 0px 5px;
`;
const Text = styled.div`
  margin-right: 10px;
  font: bold;
  text-transform: capitalize;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 5px;
  //padding-left: 10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  width: 90px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Type = styled.div`
  display: flex;
`;
const Favorite = styled.div``;
const Button = styled.button``;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    text-transform: capitalize;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;
`;

export default Pokemon;
