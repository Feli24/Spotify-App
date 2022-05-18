import React, { useState, useEffect } from "react";
import Albums from "../components/AlbumCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Album.module.css";

export default function AlbumPage() {
    const [albums, setAlbums] = useState(null);
    const params = useParams();
    const name = params.name;
    const id = params.artistId;
    const token = params.token;
    const url = `https://api.spotify.com/v1/artists/${id}/albums`;

    // without useEffect, I have an infinite loop since setAlbums re-renders the component
    useEffect(() => {
        const fetchAlbums = async () => {
            const { data } = await axios.get(url, {
                headers: {
                    Authorization: "Bearer " + token,
                },
                params: {
                    id: id,
                },
            });

            setAlbums(data.items);
        };
        fetchAlbums();
    }, [id, token, url]);

    const displayAlbums = () => {
        return albums.map((album, i) => <Albums info={album} key={i} />);
    };

    return albums ? (
        <div className={styles.albumPageContainer}>
            <div className={styles.albumPageTitle}>
                <h2>{name}</h2>Albums
            </div>
            <div className={styles.albumsContainer}>{displayAlbums()}</div>
        </div>
    ) : null;
}
