import { React, createContext, useState } from "react";

const context_init = {
    // searchValue: "",
    token: "",
    // changeSearchValue: (searchValue) => {},
    changeToken: (token) => {},
};

const AuthContext = createContext(context_init);

export function AuthContextProvider(props) {
    // const [searchValue, setSearchValue] = useState("");
    const [tokenValue, setTokenValue] = useState("");

    const context = {
        // searchValue: searchValue,
        token: tokenValue,
        // changeSearchValue: setSearchValue,
        changeToken: setTokenValue,
    };

    return (
        <AuthContext.Provider value={context}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
