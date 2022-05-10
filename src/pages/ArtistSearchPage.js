import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";
import Artists from "../components/Artist";

const SEARCH_URL = "https://api.spotify.com/v1/search";

export default function ArtistSearchPage() {
    const [artists, setArtists] = useState(null);

    // const token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    const location = useLocation();
    const splitLocation = location.hash.split("&");
    const token = splitLocation[0].slice(14);

    const submitArtist = (name) => {
        console.log("Submitted, " + name + " with token: " + token);
        const { data } = axios.get(SEARCH_URL, {
            headers: {
                Authorization: "Bearer " + token,
            },
            params: {
                q: name,
                type: "artist",
            },
        });
        setArtists(data);
    };

    return <Search submitArtist={submitArtist} />;
}
