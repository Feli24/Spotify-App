import React, { useState, useEffect, useContext, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Search from "../components/SearchBar";
import Artists from "../components/ArtistCard";
// import styles from "../styles/Artist.module.css";
import AuthContext from "../auth/auth-context";

const SEARCH_URL = "https://api.spotify.com/v1/search";

export default function ArtistSearchPage() {
    const [searchValue, setSearchValue] = useState("");
    const [artists, setArtists] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const context = useContext(AuthContext);

    const searchArtist = useCallback(
        async (name) => {
            if (name.length > 0) {
                const { data } = await axios.get(SEARCH_URL, {
                    headers: {
                        Authorization: "Bearer " + context.token,
                    },
                    params: {
                        q: name,
                        type: "artist",
                    },
                });
                setArtists(data.artists.items);
            } else {
                setArtists(null);
            }
        },
        [context.token]

        // navigate(`/search?name=${name}#${token}`)
    );

    useEffect(() => {
        Array.from(document.querySelectorAll("input")).forEach(
            (input) => (input.value = "")
        );

        if (searchParams.get("searchValue")) {
            console.log("IM HERE");
            setSearchValue(searchParams.get("searchValue"));
            searchArtist(searchParams.get("searchValue"));
        }
    }, [searchArtist, setSearchParams, searchParams]);

    // const changeQueryParams = () => {
    //     setSearchParams(`searchValue=${context.searchValue}`);
    // };

    // console.log("I'm on ArtistSearchPage, here is my token: ", context.token);

    return (
        <div className="artistSearchPageContainer">
            <Search
                searchArtist={searchArtist}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            {artists ? (
                <div className="artistsContainer">
                    {artists.map((artist, i) => (
                        <Artists
                            info={artist}
                            key={i}
                            searchValue={searchValue}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
}
