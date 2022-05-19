import React, { useContext } from "react";
// import styles from "../styles/Login.module.css";
import { FaSpotify } from "react-icons/fa";
import AuthContext from "../auth/auth-context";
// import { useNavigate } from "react-router-dom";

const AUTH_URL =
    "http://accounts.spotify.com/authorize?client_id=93c91ab791eb4ef2b6374e1aed0766be&response_type=token&redirect_uri=http://localhost:3000/";

export default function LoginPage() {
    const context = useContext(AuthContext);
    // const navigate = useNavigate();
    console.log("I'm on LoginPage");
    console.log(context.token);

    // if (context.token !== "") {
    //     console.log("Here");
    //     navigate("/search", { replace: true });
    // } else {
    //     console.log("Here2");
    //     return (
    //         <div className="loginPage">
    //             <a href={AUTH_URL} className="loginContainer">
    //                 <div className="loginName loginItem">Login</div>
    //                 <FaSpotify className="loginLogo loginItem" />
    //             </a>
    //         </div>
    //     );
    // }

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
