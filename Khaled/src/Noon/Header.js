import React, { Component } from 'react';
import './../reset.css';
import './work.css';


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            logo: "images/abbaa.png",
            text:   "is a printable magazine that introduce the latest women sports news, opinions, articles and previews inspirational stories"+
                    "that deserve to be told. Producing an online magazine allowed Noon to reach a global market and offer"+
                    "the latest information daily online which attracted lots of users and kept them updated with the"+
                    "latest sports news.",
            image: "images/group-2.png"
        }
    }
    
    render() {
        return (
            <header>
                <div id="circle"/>
                <div>
                    <div id="group-1">
                        <div>
                            <img src={this.state.logo} width="80%" alt="logo"/>
                        </div>
                        <br/>
                        <div style={{backgroundColor: "white"}} className="line"/>
                        <br/>
                        <div className="white-text">
                            <h3>Noon magazine</h3>
                        </div>
                        <br/>
                        <div className="white-text">
                            <p>
                                {this.state.text}
                            </p>
                        </div>
                    </div>
                    <div id="group-2">
                        <img src={this.state.image} width="100%" alt="noon"/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;