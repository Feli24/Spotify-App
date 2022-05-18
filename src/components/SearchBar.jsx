import React, { useContext } from "react";
import styles from "../styles/Search.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import SearchContext from "../store/search-context";

export default function SearchBar(props) {
    const context = useContext(SearchContext);

    const onChangeHandler = (e) => {
        e.preventDefault(); // prevent reload of page
        const name = e.target.value;
        context.changeSearchValue(name);
        props.searchArtist(name);
    };

    const containerClass = context.searchValue ? styles.artistSearch : null;

    return (
        <div className={`${styles.searchContainer} ${containerClass}`}>
            <form className={styles.searchForm}>
                <input
                    className={styles.searchItem}
                    type="search"
                    value={context.searchValue}
                    placeholder="Search for an artist..."
                    onChange={onChangeHandler}
                ></input>
                <button
                    className={styles.searchItem}
                    type="submit"
                    style={{
                        position: "absolute",
                        right: "2.5%",
                        background: "transparent",
                        opacity: "0.3",
                    }}
                >
                    <BiSearchAlt2 className={styles.searchIcon} />
                </button>
            </form>
        </div>
    );
}
