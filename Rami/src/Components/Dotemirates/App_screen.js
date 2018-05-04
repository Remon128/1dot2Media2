import React from 'react';
import "./../CompProps.css";
import img3 from "./dotemirates contents/app screen 2.png";
import img2 from "./dotemirates contents/app screen 1.png";
import img7 from "./dotemirates contents/app screen 3.png";
import img4 from "./dotemirates contents/app screen 4.png";
import img5 from "./dotemirates contents/app screen 5.png";
import img6 from "./dotemirates contents/app screen 6.png";

const App_screen = () => {
    return (
        <div>
             <img className="appscreen2" src={img3} alt="sora 9" />
            <img className="appscreen1" src={img2} alt="sora 8" />
            <img className="appscreen3" src={img7} alt="sora 10" />
            <img className="appscreen4" src={img4} alt="sora 11" />
            <img className="appscreen5" src={img5} alt="sora 12" />
            <img className="appscreen6" src={img6} alt="sora 13" />
        
        </div>

    );
}

export default App_screen;