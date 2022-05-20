import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
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
            <Link to="/" className="headerLogoTitleContainer">
                <FaSpotify className="headerLogo" />
                <h1>Spotify Artist Search</h1>
            </Link>
            <div className="headerLogoutContainer">
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
