// DC 비디오 페이지 JS 
import React from "react";
import isrc from "./ImgSrc";

const VIDEO = () => {
    return(
        <>
            <h1>VIDEO 페이지</h1>
            <iframe src={isrc.video} />
        </>
    );
};

export default VIDEO;