import React, { useState } from "react";
import styles from "../styles/Search.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Search(props) {
    const [name, setName] = useState("");

    const onChangeHandler = (e) => {
        setName(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault(); // prevent reload of page
        props.submitArtist(name);
    };

    return (
        <div className={styles.searchPage}>
            <form className={styles.searchContainer} onSubmit={onSubmitHandler}>
                <input
                    className={styles.searchItem}
                    type="search"
                    value={name}
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
