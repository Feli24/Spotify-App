import React from "react";
import styles from "../styles/TopBar.module.css";

export default function TopBar() {
    return (
        <nav className={styles.topBar}>
            <h1>Spotify Artist Search</h1>
        </nav>
    );
}
