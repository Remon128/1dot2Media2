import React, { Component } from 'react';
import Title from './Title'
import Bullets from './Bullets'
import ImageComponent from './ImageComponent'
import DMSlist from './DMSlist'
import '../css/ServiceomponentStyle.css'
const DMScomponent = (props) => {


  return (
    <div style={props.style} className="container-fluid Component" >
      <div className="raw " >
        <div className="col-sm-1 "><Bullets></Bullets></div>
        <div className="col-sm-5">  <Title SectionFirstTitle={props.FirstTitle} SectionSecondTitle={props.SecondTitle} /></div>
        <div className="col-sm-4"><ImageComponent ImageLink={props.ImageLink}></ImageComponent></div>
        <div className="col-sm-2"> <DMSlist></DMSlist> </div>
      </div>
    </div>
  );
};

export default DMScomponent;
