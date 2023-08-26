/* eslint-disable react/prop-types */
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props;
    const previousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };
    const nextPage = () => {
        if (page + 1 !== totalPages) {
            setPage(page + 1);
        }
    };
    return (
        <>
            <div>
                <div className="pokedex-header">
                    <h1>Pokedex</h1>
                    <Pagination
                        page={page + 1}
                        totalPages={totalPages}
                        previousPage={previousPage}
                        nextPage={nextPage}
                    />
                </div>
                {loading ? (
                    <div>Carrregando, te acalma!</div>
                ) : (
                    <div className="pokedex-grid">
                        {pokemons?.map((pokemon, index) => {
                            return (
                                <Pokemon
                                    pokemon={pokemon}
                                    key={index}
                                ></Pokemon>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default Pokedex;
