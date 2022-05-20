import React from "react";
import { FaSpotify } from "react-icons/fa";

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=93c91ab791eb4ef2b6374e1aed0766be&response_type=token&redirect_uri=http://localhost:3000/";

export default function LoginPage() {
    return (
        <div className="loginPage">
            <a href={AUTH_URL} className="loginContainer">
                <div className="loginName loginItem">Login</div>
                <FaSpotify className="loginLogo loginItem" />
            </a>
        </div>
    );
}

// // const styledLoginPage = styled.div`
// `
// css in jsx
