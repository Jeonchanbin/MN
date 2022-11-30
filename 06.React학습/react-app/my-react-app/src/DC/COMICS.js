// DC 코믹 페이지 JS 
import React from "react";
import isrc from "./ImgSrc";

const COMICS = () => {
    return(
        <>
            <h1>COMICS 페이지</h1>
            <img src={isrc.comics} />
        </>
    );
};

export default COMICS;