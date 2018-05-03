
import React, { Component } from 'react';
import DotVidFirst from './DotVidFirst';
import DotVidSecond from './DotVidSecond';
import DotVidThird from './DotVidThird';
import DotVidFourth from './DotVidFourth';
import './dotVidCss.css';

class DotVidMain extends Component {
    render() {
      return (
        <div className="Main_page_dotVid">
            <DotVidFirst/>
            <DotVidSecond/>
            <DotVidThird/>
            <DotVidFourth/>
        </div>
      );
    }
}


export default DotVidMain;