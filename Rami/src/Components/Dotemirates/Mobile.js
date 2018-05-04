import React from 'react';
import "./../CompProps.css";
import img1 from "./dotemirates contents/iPhone 6 _ 4.7 inch _ Silver1 copy.png";
import RoundedRectangles from './RoundedRectangles';
import MobileStrings from './MobileStrings';

const Mobile = () => {
    return (
        <div>
             <img className="iphone" src={img1} alt="sora 26"/>
             <RoundedRectangles />
             <MobileStrings />
        </div>

    );
}

export default Mobile;