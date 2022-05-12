import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";
import Artists from "../components/Artist";
import styles from "../styles/Artist.module.css";

const SEARCH_URL = "https://api.spotify.com/v1/search";

export default function ArtistSearchPage() {
    const [artists, setArtists] = useState(null);

    // const token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    const location = useLocation();
    const splitLocation = location.hash.split("&");
    const token = splitLocation[0].slice(14);

    const submitArtist = async (name) => {
        console.log("Submitted, " + name + " with token: " + token);

        if (name.length > 0) {
            const { data } = await axios.get(SEARCH_URL, {
                headers: {
                    Authorization: "Bearer " + token,
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
    };

    const displayArtists = () => {
        return artists.map((artist) => <Artists info={artist} />);
    };

    return (
        <div className={styles.artistSearchPageContainer}>
            <Search submitArtist={submitArtist} />
            {artists ? (
                <div className={styles.artistsContainer}>
                    {displayArtists()}
                </div>
            ) : null}
        </div>
    );
}
