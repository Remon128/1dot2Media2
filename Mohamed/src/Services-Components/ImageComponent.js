import React, { Component } from 'react';
import '../css/ImageComponentStyle.css'
const ImageComponent = (props) => {


  return (
    <div className="ImageComponent">
      <img className="img-responsive" src={require('../img/' + props.ImageLink)} />

    </div>
  );

};
export default ImageComponent;
