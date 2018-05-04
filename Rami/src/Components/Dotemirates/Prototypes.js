import React from 'react';
import "./../CompProps.css";
import img1 from "./dotemirates contents/New Sources.png";
import img2 from "./dotemirates contents/Search.png";
import img3 from "./dotemirates contents/Settings.png";
import img4 from "./dotemirates contents/Home.png";
import img5 from "./dotemirates contents/Profile.png";

const Prototypes = () => {
    return (
        <div>
            <p className="PROTOTYPE">PROTOTYPE</p>
            <div>
                <img className="New_Src1" src={img1} alt="sora 39" />
                <img className="New_Src2" src={img1} alt="sora 40" />
                <img className="New_Src3" src={img1} alt="sora 41" />
            </div>
            <div>
                <img className="search1" src={img2} alt="sora 42" />
                <img className="search2" src={img2} alt="sora 43" />
            </div>
            <div>
                <img className="setting1" src={img3} alt="sora 44" />
                <img className="setting2" src={img3} alt="sora 45" />
            </div>
            <div>
                <img className="home" src={img4} alt="sora 46" />
                <img className="profile" src={img5} alt="sora 47" />
            </div>
        </div>

    );
}

export default Prototypes;
