import React, { useState, useEffect, useContext, useCallback } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";
import Artists from "../components/Artist";
import styles from "../styles/Artist.module.css";
import SearchContext from "../store/search-context";

const SEARCH_URL = "https://api.spotify.com/v1/search";

export default function ArtistSearchPage() {
    const [artists, setArtists] = useState(null);
    const location = useLocation();
    const context = useContext(SearchContext);

    // const navigate = useNavigate();
    // window.onpopstate = () => {
    //     navigate("/search");
    // };

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
    );

    useEffect(() => {
        const locationHash = location.hash.split("&");
        const token = locationHash[0].slice(14);
        // const token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        context.changeToken(token);

        if (context.searchValue !== "") {
            searchArtist(context.searchValue);
        }
    }, [context, location.hash, searchArtist]);

    return (
        <div className={styles.artistSearchPageContainer}>
            <Search searchArtist={searchArtist} />
            {artists ? (
                <div className={styles.artistsContainer}>
                    {artists.map((artist, i) => (
                        <Artists info={artist} token={context.token} key={i} />
                    ))}
                </div>
            ) : null}
        </div>
    );
}
