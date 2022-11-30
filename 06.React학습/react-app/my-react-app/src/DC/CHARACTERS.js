// DC 캐릭터 페이지 JS 
import React from "react";
import isrc from "./ImgSrc";

const CHARACTERS = () => {
    return(
        <>
            <h1>CHARACTERS 페이지</h1>
            <img src={isrc.character} />
        </>
    );
};

export default CHARACTERS;