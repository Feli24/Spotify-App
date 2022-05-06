import React from "react";
import styles from "../styles/Search.module.css";

export default function Search() {
    return (
        <div className={styles.search}>
            <input type="search" placeholder="Search for an artist..."></input>
        </div>
    );
}
