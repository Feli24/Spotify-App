import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Albums from "../components/AlbumCard";
import { useAuth } from "../auth/auth-context";
import axios from "axios";
// import styles from "../styles/Album.module.css";

export default function AlbumPage() {
    const [albums, setAlbums] = useState(null);
    const { tokenValue } = useAuth("");
    const params = useParams();
    const url = `https://api.spotify.com/v1/artists/${params.artistId}/albums`;

    // without useEffect, I have an infinite loop since setAlbums re-renders the component
    useEffect(() => {
        const fetchAlbums = async () => {
            const { data } = await axios.get(url, {
                headers: {
                    Authorization: "Bearer " + tokenValue,
                },
                params: {
                    id: params.artistId,
                },
            });

            setAlbums(data.items);
        };
        fetchAlbums();
    }, [params.artistId, tokenValue, url]);

    const displayAlbums = () => {
        return albums.map((album, i) => <Albums info={album} key={i} />);
    };

    return albums ? (
        <div className="albumPageContainer">
            <div className="albumPageTitle">
                <h2>{params.name}</h2>
                <h3>Albums</h3>
            </div>
            <div className="albumsContainer">{displayAlbums()}</div>
        </div>
    ) : null;
}
