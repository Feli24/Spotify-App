import React from "react";

const AUTH_URL =
    "http://accounts.spotify.com/authorize?client_id=93c91ab791eb4ef2b6374e1aed0766be&response_type=token&redirect_uri=http://localhost:3000";

export default function Login() {
    return (
        <div className="btn">
            <button>
                <a href={AUTH_URL}>Login</a>
            </button>
        </div>
    );
}
