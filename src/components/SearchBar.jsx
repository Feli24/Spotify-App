// import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
// import styles from "../styles/Search.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
// import SearchContext from "../store/search-context";

export default function SearchBar(props) {
    // const context = useContext(SearchContext);
    const [searchParams] = useSearchParams();
    const onChangeHandler = (e) => {
        e.preventDefault(); // prevent reload of page
        console.log("change", e.target.value);
        const name = e.target.value;
        // context.changeSearchValue(name);
        props.searchArtist(name);
        props.setSearchValue(name);
    };

    const containerClass = searchParams ? "artistSearch" : null;

    return (
        <div className={`searchContainer ${containerClass}`}>
            <div className="searchForm">
                <input
                    className="searchItem"
                    type="search"
                    value={searchParams.get("searchValue")}
                    placeholder="Search for an artist..."
                    onChange={onChangeHandler}
                ></input>
                <button
                    className="searchItem"
                    style={{
                        position: "absolute",
                        right: "2.5%",
                        background: "transparent",
                        opacity: "0.3",
                    }}
                >
                    <BiSearchAlt2 className="searchIcon" />
                </button>
            </div>
        </div>
    );
}
