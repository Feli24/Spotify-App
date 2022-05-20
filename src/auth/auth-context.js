import { React, createContext, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

const context_init = {
    // searchValue: "",
    // changeSearchValue: (searchValue) => {},
    token: "",
    setToken: (token) => {},
};

const AuthContext = createContext(context_init);

export function AuthContextProvider({ children }) {
    // const [searchValue, setSearchValue] = useState("");
    const [tokenValue, setTokenValue] = useState("");

    // const token = useLocation().hash.split("&")[0].slice(14);
    // useEffect(() => {
    //     if (token !== "") {
    //         console.log("Token in Auth Context -> ", token);
    //         setTokenValue(token);
    //     }
    // }, [token]);

    return (
        <AuthContext.Provider value={{ tokenValue, setTokenValue }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
