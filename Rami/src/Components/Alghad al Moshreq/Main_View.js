import React from 'react';
import "./../Components props.css";
import img1 from "./alghad al moshreq contents/01.png";
import img2 from "./alghad al moshreq contents/Macbook Front Open Silver.png";
import img3 from "./alghad al moshreq contents/iPhone 6 _ 4.7 inch _ Silver1.png";

const Main_View = () => {
  return (
    <div className="Rectangle_18">
      <img className="logo" src={img1} />
      <img className="lab" src={img2} />
      <img className="mob" src={img3} />
      <p className="Al_Ghad_Al_Moshreq_is_one_of_the_most_viewed_an">Al Ghad Al Moshreq is one of the most viewed and creditable TV channel in Yemen, which gave our<br />experts the chance to innovate a mobile optimized website. We developed the website based on users<br />focused solution, such as the updated and informative blogs,multimedia preview, live broadcast service<br /> and social media links that keeps their users strongly attached to the website </p>
    </div>
  );
}

export default Main_View;
