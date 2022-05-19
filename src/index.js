import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { AuthContextProvider } from "./auth/auth-context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </React.StrictMode>
);
