import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

export default function SearchBar(props) {
    const onChangeHandler = (e) => {
        e.preventDefault(); // prevent reload of page
        // context.changeSearchValue(name);
        props.searchArtist(e.target.value);
        props.setSearchValue(e.target.value);
    };

    const containerClass = props.searchValue ? "artistSearch" : null;

    return (
        <div className={`searchContainer ${containerClass}`}>
            <div className="searchForm">
                <input
                    className="searchItem"
                    type="search"
                    value={props.searchValue}
                    placeholder="Search for an artist..."
                    onChange={onChangeHandler}
                ></input>
                <i
                    className="searchItem searchIcon"
                    style={{
                        position: "absolute",
                        right: "2.5%",
                        background: "transparent",
                        opacity: "0.3",
                    }}
                >
                    <BiSearchAlt2 />
                </i>
            </div>
        </div>
    );
}
