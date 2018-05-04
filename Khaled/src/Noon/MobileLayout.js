import React, { Component } from 'react';
import './../reset.css';
import './work.css';

class MobileLayout extends Component {
    constructor(props){
        super(props);
            this.state = {
                rowImage:"#",
                mainLayout:"images/mobile4.png",
                layouts:['images/mobile1.png','images/mobile2.png','images/mobile3.png']};
    }

    render(){
        return(
            <div style={{marginTop:"18vw"}} className="section">
        <div className="heading">
            <h1>04</h1>
            <div className="title">
                <h2 style={{color: "#9075ab"}}>Mobile layout</h2>
                <br/>
                <div style={{backgroundColor: "#e6e6e6"}} className="line"></div>
            </div>
        </div>
        <img style={{marginBottom: "25vw"}} src="images/row.png" width="100%" alt="row"/>
        <img style={{position: "absolute", right: "25%", top: "0"}} alt="main layout" src={this.state.mainLayout}/>
        <center>
                    {this.state.layouts.map(layout => {
                        return (
                            <img src="layout" height="670px" width="375px" alt="mobile-layout"/>
                        );
                    })}
        </center>
        </div>
        );
    }
}

export default MobileLayout;