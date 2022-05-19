import React from "react";
import { FaSpotify } from "react-icons/fa";
// import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <nav className="header">
            <h1>Spotify Artist Search</h1>
            <div className="headerLogoutLogoContainer">
                {/* <button className="headerLogoutButton">Logout</button> */}
                <FaSpotify className="headerLogo" />
            </div>
        </nav>
    );
}
