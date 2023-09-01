/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import FavoriteContext from "../Contexts/favoritesContext";
import "./Pokemon.css";
import "../assets/animated/1.gif";

const Pokemon = (props) => {
  const [like, setLike] = useState(false);
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const onHeartClick = () => {
    if (!like) {
      setLike(true);
      updateFavoritePokemons(pokemon.name);
    } else {
      setLike(false);
    }
  };

  const img = `../src/assets/animated/${pokemon.id}.gif`;
  return (
    <>
      <div id="Card" className={pokemon.types[0].type.name}>
        <div className="pokemon-image-container">
          <Img>
            <img src={img} />
          </Img>
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

const Img = styled.div`
  padding: 0px 5px;
`;

export default Pokemon;
