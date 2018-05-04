import React from 'react';
import "./../CompProps.css";
import img1 from "./dotemirates contents/Rectangle 3 copy 3.png";
import img2 from "./dotemirates contents/Rectangle 3 copy.png";
import img3 from "./dotemirates contents/Vector Smart Object2.png";
import img4 from "./dotemirates contents/Vector Smart Object copy 7.png";
import img5 from "./dotemirates contents/Vector Smart Object.png";

const Header = () => {
    return (
        <div>
            <img className="Rectangle_3_copy_3" src={img1} alt="sora 1" />
            <img className="Vector_Smart_Object" src={img5} alt="sora 2" />
            <img className="Rectangle_3_copy" src={img2} alt="sora 3" />
            <img className="Vector_Smart_Object2" src={img3} alt="sora 4" />
            <img className="Vector_Smart_Object_copy_7" src={img4} alt="sora 5" />
        </div>

    );
}

export default Header;
