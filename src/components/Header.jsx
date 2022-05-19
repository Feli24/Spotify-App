import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";
import AuthContext from "../auth/auth-context";
// import styles from "../styles/Header.module.css";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const context = useContext(AuthContext);

    const handleLogout = () => {
        context.changeToken("");
        navigate("/login");
    };

    return (
        <nav className="header">
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
                <FaSpotify className="headerLogo" />
            </div>
        </nav>
    );
}
