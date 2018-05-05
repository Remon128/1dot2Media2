import React, { Component } from 'react';

class Second extends Component {
  render() {
    return (
       <div className="content">
       <div className="left">
           <div className="rectangle">
               <img src="./images/1.png" alt="image"/>
           </div>
       </div>
       <div className="right">
           <img src="./images/right_photo.png" alt="logo"/>
           <h2 className="active">dotmedia</h2>
           <h2>Video production</h2>
           <p>A pioneering, innovation-driven software solutions and service company that offers e-commerce solutions, software development, systems architecture and design, mobile solutions and hosting solutions. We use a combination of smart innovative
               process and talented professionals to deliver high performance solutions and technical objectives
           </p>
           <button type="button" className="btn">Visit the website</button>
       </div>
   </div>
      
    );
  }
}

export default Second;