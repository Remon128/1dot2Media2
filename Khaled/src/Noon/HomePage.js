import React, { Component } from 'react';
import './../reset.css';
import './work.css';

class HomePage extends Component {
    constructor(props){
        super(props);
            this.state = {home:"images/homepage.png"};
    }

    render(){
        return(
            <div className="section">
        <div className="heading">
            <h1>02</h1>
            <div className="title">
                <h2 style={{color: "#9075ab"}}>Homepage</h2>
                <br/>
                <div style={{backgroundColor: "#e6e6e6"}} class="line"></div>
            </div>
        </div>
        <br/>
        <img style={{height: "218vw"}} src={this.state.home} width="100%" alt="home page"/>
        <div>
            <div id="ellipse"></div>
            <div id="rectangle"></div>
        </div>
    </div>
        );
    }
}

export default HomePage;