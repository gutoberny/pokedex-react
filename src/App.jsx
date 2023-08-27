import "./App.css";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/navbar";
import Pokedex from "./components/Pokedex";
import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemnon } from "./api";
import { FavoriteProvider } from "./Contexts/favoritesContext";

const favoritesKey = "f";
function App() {
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [favorites, setFavorite] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [notFound, setNotFound] = useState(false);
    const itensPerPage = 25;
    const fetchPokemons = async () => {
        try {
            setLoading(true);
            setNotFound(false);
            const data = await getPokemons(itensPerPage, itensPerPage * page);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url);
            });

            const results = await Promise.all(promises);
            setPokemons(results);
            setLoading(false);
            setTotalPages(Math.ceil(data.count / itensPerPage));
        } catch (error) {
            console.log(error);
        }
    };

    const loadFavoritePokemons = () => {
        const pokemons =
            JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
        setFavorite(pokemons);
    };

    useEffect(() => {
        fetchPokemons();
    }, [page]);

    useEffect(() => {
        loadFavoritePokemons();
    }, []);

    const updateFavoritePokemons = (name) => {
        const updatedFavorites = [...favorites];
        const favoriteIndex = favorites.indexOf(name);
        console.log(favoriteIndex);
        if (favoriteIndex >= 0) {
            updatedFavorites.slice(favoriteIndex, 1);
        } else {
            updatedFavorites.push(name);
        }
        window.localStorage.setItem(
            favoritesKey,
            JSON.stringify(updatedFavorites)
        );
        setFavorite(updatedFavorites);
    };

    const onSearchHandler = async (pokemon) => {
        if (!pokemon) {
            return fetchPokemons();
        } else {
            setLoading(true);
            setNotFound(false);
            const result = await searchPokemnon(pokemon);
            if (!result) {
                setNotFound(true);
            } else {
                setPokemons([result]);
                setPage(0);
                setTotalPages(1);
            }
            setLoading(false);
        }
    };
    return (
        <>
            <FavoriteProvider
                value={{
                    favoritePokemons: favorites,
                    updateFavoritePokemons: updateFavoritePokemons,
                }}
            >
                <div>
                    <Navbar />
                    <Searchbar onSearch={onSearchHandler} />
                    {notFound ? (
                        <div className="not-found-text"> Meteu Essa ?</div>
                    ) : (
                        <Pokedex
                            pokemons={pokemons}
                            loading={loading}
                            page={page}
                            setPage={setPage}
                            totalPages={totalPages}
                        />
                    )}
                </div>
            </FavoriteProvider>
        </>
    );
}

export default App;
