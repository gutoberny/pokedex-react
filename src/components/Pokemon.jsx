/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const Pokemon = (props) => {
    const [like, setLike] = useState(false);
    const { pokemon } = props;
    const onHeartClick = () => {
        if (!like) {
            setLike(true);
        } else {
            setLike(false);
        }
        console.log("favoritado");
    };
    return (
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="pokemons-image"
                />
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
                    <button
                        className="pokemon-heart-btn"
                        onClick={onHeartClick}
                    >
                        {!like ? <AiOutlineHeart /> : <FcLike />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
