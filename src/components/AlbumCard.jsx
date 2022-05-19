import React from "react";
import { FaSpotify } from "react-icons/fa";
// import styles from "../styles/Album.module.css";

export default function AlbumCard({ info }) {
    const image = info.images;
    const name = info.name;
    const artists = info.artists.map((artist) => artist.name);
    const date = info.release_date;
    const tracks = info.total_tracks;
    const external_url = info.external_urls.spotify;
    return (
        <div className="albumContainer">
            <div className="albumImg">
                {image.length !== 0 ? (
                    <img src={image[0].url} alt="" />
                ) : (
                    <div>No Image</div>
                )}
            </div>
            <div className="albumInfo">
                <div className="albumNameArtistsContainer">
                    <div className="albumName albumItem">{name}</div>
                    <div className="albumArtists albumItem">
                        {artists.join(", ")}
                    </div>
                </div>
                <div className="albumDateTracksContainer">
                    <div className="albumDate albumItem">{date}</div>
                    <div className="albumTracks albumItem">{tracks} tracks</div>
                </div>
            </div>
            <div className="albumUrl albumItem">
                <a
                    href={external_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Preview on Spotify
                    <FaSpotify className="albumUrlLogo" />
                </a>
            </div>
        </div>
    );
}
