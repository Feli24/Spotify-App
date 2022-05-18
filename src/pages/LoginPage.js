import React, { useContext } from "react";
import styles from "../styles/Login.module.css";
import { FaSpotify } from "react-icons/fa";
import SearchContext from "../store/search-context";
import { Link, useNavigate } from "react-router-dom";

const AUTH_URL =
    "http://accounts.spotify.com/authorize?client_id=93c91ab791eb4ef2b6374e1aed0766be&response_type=token&redirect_uri=http://localhost:3000/search";

export default function LoginPage() {
    const context = useContext(SearchContext);
    const navigate = useNavigate();
    console.log(context);

    if (context.token !== "") {
        console.log("Here");
        navigate("/search", { replace: true });
    } else {
        console.log("Here2");
        return (
            <div className={styles.loginPage}>
                {/* <Link to={AUTH_URL}> */}
                <div className={styles.loginContainer}>
                    <a href={AUTH_URL} className={styles.loginItem}>
                        Login
                    </a>
                    <FaSpotify
                        className={styles.loginItem}
                        style={{
                            color: "#1DB954",
                            position: "absolute",
                            right: "0",
                            fontSize: "4rem",
                        }}
                    />
                </div>
                {/* </Link> */}
            </div>
        );
    }
}

// // const styledLoginPage = styled.div`
// `
// css in jsx
