import React from "react";
import styles from "../styles/Artist.module.css";
import { Rating } from "@mui/material";

export default function Artist(props) {
    const data = props.info;
    const name = data.name;
    const image = data.images;
    const followers = data.followers.total;
    const popularity = (data.popularity * 5) / 100;

    const artistClick = () => {
        console.log(`${data.name} clicked`);
    };

    return (
        <div className={styles.artistContainer} onClick={artistClick}>
            {image.length !== 0 ? (
                <img src={image[0].url} alt="" className={styles.artistImg} />
            ) : (
                <div className={styles.artistImg}>No Image</div>
            )}
            <div className={`${styles.artistName} ${styles.artistItem}`}>
                {name}
            </div>
            <div className={`${styles.artistFollowers} ${styles.artistItem}`}>
                {followers} followers
            </div>
            <div className={`${styles.artistPopularity} ${styles.artistItem}`}>
                <Rating
                    name="read-only"
                    value={popularity}
                    precision={0.5}
                    readOnly
                />
            </div>
        </div>
    );
}
