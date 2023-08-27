import { FcLike } from "react-icons/fc";
import React, { useContext } from "react";
import FavoriteContext from "../Contexts/favoritesContext";

const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext);
    const logo =
        "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return (
        <>
            <nav>
                <div>
                    <img src={logo} alt="pokeapi-logo" className="navbar-img" />
                </div>
                <div>
                    {favoritePokemons.length}
                    <FcLike />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
