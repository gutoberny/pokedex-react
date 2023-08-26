import "./App.css";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/navbar";
import Pokedex from "./components/Pokedex";
import { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "./api";

function App() {
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const itensPerPage = 25;
    const fetchPokemons = async () => {
        try {
            setLoading(true);
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

    useEffect(() => {
        console.log("carregou");
        fetchPokemons();
    }, [page]);

    return (
        <>
            <div>
                <Navbar />
                <Searchbar />
                <Pokedex
                    pokemons={pokemons}
                    loading={loading}
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />
            </div>
        </>
    );
}

export default App;
