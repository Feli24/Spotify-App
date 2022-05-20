import { React, createContext, useState, useContext } from "react";

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

    return (
        <AuthContext.Provider value={{ tokenValue, setTokenValue }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
