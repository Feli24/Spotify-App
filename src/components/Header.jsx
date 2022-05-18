import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <nav className={styles.topBar}>
            <h1>Spotify Artist Search</h1>
        </nav>
    );
}
