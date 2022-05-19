import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../auth/auth-context";

export default function HomePage() {
    const context = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        const locationHash = location.hash.split("&");
        const token = locationHash[0].slice(14);
        // const token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        if (token) context.changeToken(token);
    }, [context, location]);

    return !context.token ? (
        <Navigate to="/login" replace />
    ) : (
        <Navigate to="/search" replace />
    );
}
