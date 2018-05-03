import React, { Component } from 'react';
import '../css/TitleStyle.css';
const Title = (props) => {

  return (
    <div className=" title">
      <h1 >{props.SectionFirstTitle}</h1>
      <h1>{props.SectionSecondTitle}</h1>
      <span className="lead desc" >We focus on providing the most creative, innovative and profitable ways
      for the business sector. We focus on providing the most creative, innovative and profitable ways for the.
      </span>
      <div className="raw">
        <div className="col-sm-2 redHrDiv"><hr /></div>
        <div className="col-sm-2 grayHrDiv"><hr /></div>

      </div>

    </div>
  );

};
export default Title;
