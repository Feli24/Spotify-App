import { React, createContext, useState } from "react";

const context_init = {
    searchValue: "",
    token: "",
    changeSearchValue: (searchValue) => {},
    changeToken: (token) => {},
};

const SearchContext = createContext(context_init);

export function SearchContextProvider(props) {
    const [searchValue, setSearchValue] = useState("");
    const [tokenValue, setTokenValue] = useState("");

    const context = {
        searchValue: searchValue,
        token: tokenValue,
        changeSearchValue: setSearchValue,
        changeToken: setTokenValue,
    };

    return (
        <SearchContext.Provider value={context}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContext;
