// DC 게임스 페이지 JS 
import React from "react";
import isrc from "./ImgSrc";

const GAMES = () => {
    return(
        <>
            <h1>GAMES 페이지</h1>
            <img src={isrc.games} />
        </>
    );
};

export default GAMES;