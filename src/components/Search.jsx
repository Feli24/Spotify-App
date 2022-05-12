import React, { useState } from "react";
import styles from "../styles/Search.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Search(props) {
    // const [name, setName] = useState("");
    const [search, setSearch] = useState(false);

    const onChangeHandler = (e) => {
        e.preventDefault(); // prevent reload of page
        const name = e.target.value;

        if (name.length > 0) {
            setSearch(true);
        } else {
            setSearch(false);
        }
        props.submitArtist(name);
    };

    // const onSubmitHandler = (e) => {
    //     e.preventDefault(); // prevent reload of page
    //     setSearch(true);
    //     props.submitArtist(name);
    // };

    const containerClass = search ? styles.artistsPage : styles.searchPage;

    return (
        <div className={containerClass}>
            <form className={styles.searchContainer} onSubmit={onChangeHandler}>
                <input
                    className={styles.searchItem}
                    type="search"
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
