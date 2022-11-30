// DC 무비 페이지 JS 
import React from "react";
import isrc from "./ImgSrc";

const MOVIES = () => {
    return(
        <>
            <h1>MOVIES 페이지</h1>
            <img src={isrc.movies} />
        </>
    );
};

export default MOVIES;