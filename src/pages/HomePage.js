import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../auth/auth-context";

export default function HomePage() {
    const context = useContext(AuthContext);
    const location = useLocation();
    console.log("I'm on Home Page");

    const locationHash = location.hash.split("&");
    const token = locationHash[0].slice(14);
    console.log(token);

    if (token) context.changeToken(token);
    // useEffect(() => {
    //     const locationHash = location.hash.split("&");
    //     const token = locationHash[0].slice(14);
    //     console.log(token);

    //     if (token) context.changeToken(token);
    //     console.log(context.token);
    //     console.log(!context.token);
    // }, [context, location]);

    return !token ? (
        <Navigate to="/login" replace={true} />
    ) : (
        <Navigate to="/search" replace={true} />
    );
}
