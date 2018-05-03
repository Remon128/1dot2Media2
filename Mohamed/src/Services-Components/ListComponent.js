import React, { Component } from 'react';
import '../css/ListStyle.css'
const ListComponent = (props) => {

  return (
    <div className="list">

      <p className="HeradeItem">
        <span >{props.first}</span>
        <span >{props.second}</span>
      </p>

      <span>Software Development</span>
      <span>Software Security<br></br>Services
                       </span>
      <p><span>Mobile Solutions</span></p>
      <span>E-commerce<br></br>
        Solutions</span>


      <span>Web Hosting
                          <br></br>Solutions</span>



      <span>Integrated Digital Marketing
                          <br></br>Strategy</span>

      <span>Digital Advertising<br></br> Management</span>

      <span>Analytics&<br></br>
        Conversion Rate Optimization</span>
    </div>

  );
};


export default ListComponent;
