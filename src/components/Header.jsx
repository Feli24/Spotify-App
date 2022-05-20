import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";
import { useAuth } from "../auth/auth-context";
// import styles from "../styles/Header.module.css";

export default function Header() {
    const { setTokenValue } = useAuth("");
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        setTokenValue("");
        navigate("/login");
    };

    return (
        <nav className="header">
            <FaSpotify className="headerLogo" />
            <h1>Spotify Artist Search</h1>
            <div className="headerLogoutLogoContainer">
                {location.pathname !== "/login" ? (
                    <button
                        className="headerLogoutButton"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                ) : null}
            </div>
        </nav>
    );
}
