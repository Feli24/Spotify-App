import React from "react";
import styles from "../styles/Album.module.css";

export default function AlbumCard({ info }) {
    const image = info.images;
    const name = info.name;
    const artists = info.artists.map((artist) => artist.name);
    const date = info.release_date;
    const tracks = info.total_tracks;
    const external_url = info.external_urls.spotify;
    return (
        <div className={styles.albumContainer}>
            <div className={styles.albumImg}>
                {image.length !== 0 ? (
                    <img src={image[0].url} alt="" />
                ) : (
                    <div>No Image</div>
                )}
            </div>
            <div className={styles.albumInfo}>
                <div className={styles.albumNameArtistsContainer}>
                    <div className={`${styles.albumName} ${styles.albumItem}`}>
                        {name}
                    </div>
                    <div
                        className={`${styles.albumArtists} ${styles.albumItem}`}
                    >
                        {artists.join(", ")}
                    </div>
                </div>
                <div className={styles.albumDateTracksContainer}>
                    <div className={`${styles.albumDate} ${styles.albumItem}`}>
                        {date}
                    </div>
                    <div
                        className={`${styles.albumTracks} ${styles.albumItem}`}
                    >
                        {tracks}
                    </div>
                </div>
            </div>
            <a
                href={external_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.albumUrl} ${styles.albumItem}`}
            >
                Preview on Spotify
            </a>
        </div>
    );
}