import React from 'react';
import "./../CompProps.css";
import img1 from "./dotemirates contents/Macbook Front Open Silver.png";
import img2 from "./dotemirates contents/iPad Air 2  Silver.png";
import img3 from "./dotemirates contents/iPad Air 2  Silver copy.png";
import img4 from "./dotemirates contents/Layer 2.png";
import img5 from "./dotemirates contents/Reflection.png";
import img6 from "./dotemirates contents/iPhone 6 _ 4.7 inch _ Silver.png";
import img7 from "./dotemirates contents/iPhone 6 _ 4.7 inch _ Silver copy.png";

const IntroImgs = () => {
    return (
        <div>
            <img className="Mac" src={img1} alt="sora 32" />
            <img className="iPad_Air_2__Silver" src={img2} alt="sora 36" />
            <img className="iPad_Air_2__Silver2" src={img3} alt="sora 35" />
            <img className="Layer_2" src={img4} alt="sora 33" />
            <img className="Reflection" src={img5} alt="sora 34" />
            <img className="iPhone_6___4_7_inch___Silver" src={img6} alt="sora 37" />
            <img className="iPhone_6___4_7_inch___Silver2" src={img7} alt="sora 38" />
        </div>

    );
}

export default IntroImgs;