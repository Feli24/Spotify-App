import React, { useContext } from "react";
import { Navigate } from "react-router";
import SearchContext from "../store/search-context";

export default function HomePage() {
    const context = useContext(SearchContext);

    return !context.token ? (
        <Navigate to="/login" />
    ) : (
        <Navigate to="/search" replace />
    );
}
