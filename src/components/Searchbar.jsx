import { useState } from "react";
import { searchPokemnon } from "../api";

const Searchbar = (props) => {
    const [search, setSearch] = useState("Charizard");
    const { onSearch } = props;
    const onChangeHandler = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
            onSearch(undefined);
        }
    };

    const onBtnClickHandler = () => {
        onSearch(search);
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
            </div>
        </>
    );
};

export default Searchbar;
