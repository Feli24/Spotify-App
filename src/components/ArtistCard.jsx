import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Rating } from "@mui/material";

export default function ArtistCard({ info, searchValue }) {
    const [, setSearchParams] = useSearchParams();
    const followers = info.followers.total.toLocaleString("en-US");
    const popularity = (info.popularity * 5) / 100;

    const onClickHandler = (e) => {
        setSearchParams(`searchValue=${searchValue}`);
    };

    return (
        <Link to={`/albums/${info.name}/${info.id}`}>
            <div className="artistContainer" onClick={onClickHandler}>
                <div className="artistImg">
                    {info.images.length !== 0 ? (
                        <img src={info.images[0].url} alt="" />
                    ) : (
                        <div>No Image</div>
                    )}
                </div>
                <div className="artistInfo">
                    <div className="artistNameFollowersContainer">
                        <div className={"artistName artistItem"}>
                            {info.name}
                        </div>
                        <div className={"artistFollowers artistItem"}>
                            {followers} followers
                        </div>
                    </div>
                    <div className={"artistPopularity artistItem"}>
                        {/* <i className=star} />
                        <i className=star} />
                        <i className=star} />
                        <i className=star} />
                        <i className=star} /> */}
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
