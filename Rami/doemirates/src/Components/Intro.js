import React from 'react';
import "./../CompProps.css";
import img1 from "./dotemirates contents/Rectangle 3.png";
import IntroImgs from './IntroImgs';

const Intro = () => {
    return (
        <div>
            <img className="Rectangle_3" src={img1} alt="sora 8" />
            <p className="Delivers_the_best_of_UAE">Delivers the best of UAE</p>
            <IntroImgs />
            <div>
                <p className="MOBILE_LAYOUT">MOBILE LAYOUT</p>
                <p className="DESKTOP_LAYOUT">DESKTOP LAYOUT</p>
                <p className="CONCEpT">CONCEPT</p>
            </div>
        </div>

    );
}

export default Intro;