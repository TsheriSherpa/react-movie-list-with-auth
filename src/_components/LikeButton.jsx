import React from "react";

export const LikeButton = (props) => {
    const likeIcon = "https://www.vhv.rs/dpng/d/405-4053187_youtube-like-hd-png-transparent-background-like-logo.png";
    return (
        <button
            className='btn btn-default'
            style={{ borderRadius: "25px", padding: "6px 10px", width: "100px", fontSize: "80%" }}>
            <img
                src={likeIcon}
                alt="rating-logo"
                style={{ height: "1rem", width: "1rem" }}
            ></img>
            <span style={{ display: "inline-block", marginLeft: "5px" }}>Like</span>
        </button>
    )
}

export const DislikeButton = (props) => {
    const icon = "https://e7.pngegg.com/pngimages/357/100/png-clipart-dislike-dislike.png";
    return (
        <button
            className='btn btn-default'
            style={{ borderRadius: "25px", padding: "6px 10px", width: "100px", fontSize: "80%" }}>
            <img
                src={icon}
                alt="rating-logo"
                style={{ height: "1rem", width: "1rem" }}>
            </img>
            <span style={{ display: "inline-block", marginLeft: "5px" }} >
                Dislike
            </span>
        </button>
    )
}