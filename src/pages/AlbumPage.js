import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Albums from "../components/AlbumCard";
import AuthContext from "../auth/auth-context";
import axios from "axios";
// import styles from "../styles/Album.module.css";

export default function AlbumPage() {
    const [albums, setAlbums] = useState(null);
    const params = useParams();
    const context = useContext(AuthContext);
    const name = params.name;
    const id = params.artistId;
    const token = context.token;
    const url = `https://api.spotify.com/v1/artists/${id}/albums`;

    console.log("Im on AlbumPage, here is my token: ", context.token);

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
        <div className="albumPageContainer">
            <div className="albumPageTitle">
                <h2>{name}</h2>
                <h3>Albums</h3>
            </div>
            <div className="albumsContainer">{displayAlbums()}</div>
        </div>
    ) : null;
}
