import { FcLike } from "react-icons/fc";

const Navbar = () => {
    const logo =
        "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return (
        <nav>
            <div>
                <img src={logo} alt="pokeapi-logo" className="navbar-img" />
            </div>
            <div>
                <FcLike />
            </div>
        </nav>
    );
};

export default Navbar;
