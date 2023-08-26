export const searchPokemnon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const ret = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await ret.json();
    } catch (error) {
        console.log("erro ", error);
    }
};

export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const ret = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await ret.json();
    } catch (error) {
        console.log("erro ", error);
    }
};

export const getPokemonData = async (url) => {
    try {
        const ret = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await ret.json();
    } catch (error) {
        console.log("erro ", error);
    }
};
