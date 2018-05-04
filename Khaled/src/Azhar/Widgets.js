import React, { Component } from 'react';
import './../reset.css';
import './work.css';

class Widget extends Component {
    constructor(props){
        super(props);
        this.state = {
            icons: "images/icons.png",
            widget: "images/widget.png"
        }
    }

    render(){
        return (
            <center>
                <div className="overview">
                    <h2>WIDGETS</h2>
                    <img src={this.state.icons} alt="Icons" style={{paddingRight: "275px", paddingBottom: "100px"}}/>
                    <img src={this.state.widget} alt="Widget"/>
                </div>
            </center>
        );
    }
}

export default Widget;