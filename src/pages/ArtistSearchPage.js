import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Search from "../components/SearchBar";
import Artists from "../components/ArtistCard";
import { useAuth } from "../auth/auth-context";

const SEARCH_URL = "https://api.spotify.com/v1/search";

export default function ArtistSearchPage() {
    const [searchValue, setSearchValue] = useState("");
    const [artists, setArtists] = useState(null);
    const { tokenValue } = useAuth("");
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const searchArtist = useCallback(
        async (name) => {
            if (!tokenValue) {
                navigate("/");
            }

            if (name.length === 0) {
                setArtists(null);
                return;
            }

            const { data } = await axios.get(SEARCH_URL, {
                headers: {
                    Authorization: "Bearer " + tokenValue,
                },
                params: {
                    q: name,
                    type: "artist",
                },
            });
            setArtists(data.artists.items);
        },
        [tokenValue, navigate]
    );

    useEffect(() => {
        if (searchParams.get("searchValue")) {
            setSearchValue(searchParams.get("searchValue"));
            searchArtist(searchParams.get("searchValue"));
            return;
        }
        setSearchValue("");
        setArtists(null);
    }, [searchArtist, setSearchParams, searchParams]);

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
