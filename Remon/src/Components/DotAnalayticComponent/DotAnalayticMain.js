
import React, { Component } from 'react';
import DotAnalayticFirst from './DotAnalayticFirst';
import DotAnalayticSecond from './DotAnalayticSecond';
import DotAnalayticThird from './DotAnalayticThird';
import './dotAnalyticsCss.css';


class DotAnalayticMain extends Component {
    render() {
      return (
        <div className="Main_page_dotAnalaytics">
           <DotAnalayticFirst/>
           <DotAnalayticSecond/>
           <DotAnalayticThird/>
        </div>
      );
    }
}

export default DotAnalayticMain;