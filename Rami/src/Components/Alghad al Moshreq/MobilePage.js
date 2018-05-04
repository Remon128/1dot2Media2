import React from 'react';
import "./../Components props.css";
import img1 from "./alghad al moshreq contents/Layer 8.png";
import img2 from "./alghad al moshreq contents/screen12.png";
import img3 from "./alghad al moshreq contents/screen13.png";

const MobilePage = () => {
    return (
        <div className="screen_13">
            <img className="layer_8" src={img1} alt="sora 28" />
            <img className="screen_12" src={img2} alt="sora 29" />
            <img src={img3} alt="sora 30" />
        </div>
    );
}
export default MobilePage;

