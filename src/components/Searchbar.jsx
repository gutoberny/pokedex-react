import { useState } from "react";
import { searchPokemnon } from "../api";

const Searchbar = () => {
    const [pokemon, setPokemon] = useState();
    const [search, setSearch] = useState("Charizard");

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    };

    const onBtnClickHandler = () => {
        onSearchHandler(search);
    };

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemnon(pokemon);
        setPokemon(result);
    };
    return (
        <>
            <div className="searchbar-container">
                <div className="searchbar">
                    <input
                        placeholder="Buscar Pokemon"
                        onChange={onChangeHandler}
                    ></input>{" "}
                </div>
                <div className="searchbar-btn">
                    <button onClick={onBtnClickHandler}>Buscar</button>
                </div>
                {pokemon ? (
                    <div>
                        <div>Nome: {pokemon.name}</div>
                        <div>Peso: {pokemon.weight}</div>
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                        />
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </>
    );
};

export default Searchbar;
