import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import { useAuth } from "../auth/auth-context";

export default function HomePage() {
    const { setTokenValue } = useAuth("");
    const navigate = useNavigate();
    const location = useLocation();

    const token = location.hash.split("&")[0].slice(14);
    if (token) {
        setTokenValue(token);
        navigate("/search", { replace: true });
    }

    return !token ? <Navigate to="/login" /> : <Navigate to="/search" />;
}
