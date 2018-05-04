import React from 'react';
import "./../CompProps.css";
import img1 from "./dotemirates contents/app screen 11.png";
import img2 from "./dotemirates contents/app screen 4_2.png";
import img3 from "./dotemirates contents/app screen 2_2.png";
import img4 from "./dotemirates contents/Layer 8.png";
import img5 from "./dotemirates contents/Layer 9.png";
import img6 from "./dotemirates contents/iPhone 6 _ 4.7 inch _ Silver1 copy_2.png";
import Circles from './Circles';

const MobApp = () => {
    return (
        <div>
            <img className="appscreen11" src={img1} alt="sora 77" />
            <img className="appscreen4_2" src={img2} alt="sora 78" />
            <img className="appscreen2_2" src={img3} alt="sora 79" />
            <img className="Layer_8" src={img4} alt="sora 89" />
            <img className="Layer_9" src={img5} alt="sora 90" />
            <img className="iPhone_6_4_7_inch_Silver1_copy_2" src={img6} alt="sora 91" />
            <Circles />
        </div>
    );
}
export default MobApp;