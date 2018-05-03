


import React, { Component } from 'react';
import DotPressFirst from './DotPressFirst';
import DotPressSecond from './DotPressSecond';
import DotPressThird from './DotPressThird';
import DotPressFourth from './DotPressFourth';
import DotPressFifth from './DotPressFifth';
import DotPressSix from './DotPressSix';
import DotPressSeventh from './DotPressSeventh';
import DotPressEight from './DotPressEight';
import './dotPressCss.css';


class DotPressMain extends Component {
    render() {
      return (
        <div className="Main_page_DotPress">
           <DotPressFirst/>
           <DotPressSecond/>
           <DotPressThird/>
           <DotPressFourth/>
           <DotPressFifth/>
           <DotPressSix/>
           <DotPressSeventh/>
           <DotPressEight/>
        </div>
      );
    }
}

export default DotPressMain;