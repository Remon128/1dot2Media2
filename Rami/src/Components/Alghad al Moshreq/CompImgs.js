import React from 'react';
import "./../Components props.css";
import img1 from "./alghad al moshreq contents/Rectangle 20 copy.png";
import img2 from "./alghad al moshreq contents/Rectangle 20.png";
import img3 from "./alghad al moshreq contents/Live page.png";
import img4 from "./alghad al moshreq contents/prog page.png";
const Compimgs = () => {
    return (
        <div>
            <img className="Rectangle_20" src={img1} alt="sora 22" />
            <img className="Rectangle_20_copy" src={img2} alt="sora 23" />
            <div>
                <img className="Live" src={img3} alt="sora 24" />
                <img className="prog_page" src={img4} alt="sora 25" />
            </div>
        </div>
    );
}

export default Compimgs;
