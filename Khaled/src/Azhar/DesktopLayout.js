import React, { Component } from 'react';
import './../reset.css';
import './work.css';

class DesktopLayout extends Component {
    constructor(props){
        super(props);
            this.state = {desktop:"images/Desktop.png" ,snap:"images/Mogama3.png"};
    }

    render(){
        return(
            <center>
                <div className="layout">
                    <h2>DESKTOP LAYOUT</h2>
                    <img src={this.state.Desktop} height="3110px" alt="Desktop"/>
                    <div id="desktop-snap">
                        <img src={this.state.snap} height="640px" alt="Sample"/>
                    </div>
                </div>
            </center>
        );
    }
}

export default DesktopLayout;