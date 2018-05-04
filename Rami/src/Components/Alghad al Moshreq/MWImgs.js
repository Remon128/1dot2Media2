import React, { Component } from 'react';
import "./../Components props.css";
import img1 from "./alghad al moshreq contents/Rectangle 18 copy 2.png";
import img2 from "./alghad al moshreq contents/dotemirates.png";
import img3 from "./alghad al moshreq contents/VSOC.png";
import img4 from "./alghad al moshreq contents/Vector Smart Object copy.png";
import img5 from "./alghad al moshreq contents/Noon.png";

const MWImgs = () => {
    return (
        <div>
            <img className="Rectangle_18_copy_2" src={img1} alt="sora 32" />
            <img className="dotemirates" src={img2} alt="sora 32" />
            <img className="VSOC" src={img3} alt="sora 33" />
            <img className="VectorSOC" src={img4} alt="sora 33" />
            <img className="Noon" src={img5} alt="sora 34" />
        </div>
    );
}
export default MWImgs;
