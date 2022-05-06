import React from "react";
// import { Link } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { FaSpotify } from "react-icons/fa";

const AUTH_URL =
    "http://accounts.spotify.com/authorize?client_id=93c91ab791eb4ef2b6374e1aed0766be&response_type=token&redirect_uri=http://localhost:3000/search";

export default function Login() {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <a href={AUTH_URL} className={styles.loginItem}>
                    Login
                </a>
                <FaSpotify
                    className={styles.loginItem}
                    style={{
                        color: "green",
                        backgroundColor: "black",
                    }}
                />
                {/* <Link to={AUTH_URL}>Login</Link> */}
            </div>
        </div>
    );
}

// css in jsx
