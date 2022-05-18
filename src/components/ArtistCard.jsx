import React, { useContext } from "react";
import styles from "../styles/Artist.module.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import SearchContext from "../store/search-context";

export default function ArtistCard({ info }) {
    const context = useContext(SearchContext);
    // const navigate = useNavigate();
    const token = context.token;
    const id = info.id;
    const name = info.name;
    const image = info.images;
    const followers = info.followers.total.toLocaleString("en-US");
    const popularity = (info.popularity * 5) / 100;

    // const onClickHandler = (e) => {
    //     e.preventDefault();
    //     navigate(`/search?name=${name}#access_token=${token}`);
    // };

    return (
        <Link to={`/albums/${name}/${id}/${token}`}>
            <div className={styles.artistContainer}>
                <div className={styles.artistImg}>
                    {image.length !== 0 ? (
                        <img src={image[0].url} alt="" />
                    ) : (
                        <div>No Image</div>
                    )}
                </div>
                <div className={styles.artistInfo}>
                    <div className={styles.artistNameFollowersContainer}>
                        <div
                            className={`${styles.artistName} ${styles.artistItem}`}
                        >
                            {name}
                        </div>
                        <div
                            className={`${styles.artistFollowers} ${styles.artistItem}`}
                        >
                            {followers} followers
                        </div>
                    </div>
                    <div
                        className={`${styles.artistPopularity} ${styles.artistItem}`}
                    >
                        {/* <i className={styles.star} />
                        <i className={styles.star} />
                        <i className={styles.star} />
                        <i className={styles.star} />
                        <i className={styles.star} /> */}
                        <Rating
                            name="read-only"
                            value={popularity}
                            precision={0.5}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
}
