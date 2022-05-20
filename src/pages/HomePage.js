import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import { useAuth } from "../auth/auth-context";

export default function HomePage() {
    const { tokenValue, setTokenValue } = useAuth("");
    const navigate = useNavigate();
    const location = useLocation();

    const token = location.hash.split("&")[0].slice(14);
    useEffect(() => {
        if (token) {
            setTokenValue(token);
            navigate("/search", { replace: true });
        }
    });

    return !tokenValue ? <Navigate to="/login" /> : <Navigate to="/search" />;
}
