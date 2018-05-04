import React, { Component } from 'react';
import './../reset.css';
import './work.css';

class InternalPages extends Component {
    constructor(props){
        super(props);
            this.state = {coloumns:[{text:"About Noon", image:"#"},{text:"Live Stream", image:"#"}]};
    }

    render(){
        return(
        <div style={{paddingBottom: "50vw"}} className="section">
            <div className="heading">
                <h1>03</h1>
                <div className="title">
                    <h2 style={{color: "#9075ab"}}>Internal Pages</h2>
                    <br/>
                    <div style={{backgroundColor: "#e6e6e6"}} className="line"></div>
                </div>
            </div>
            <div id="row">
            {this.state.coloumns.map(column => {
                return (
                    <div className="col">
                        <h4 style={{paddingLeft: "5%"}}>{column.text}</h4>
                        <img className="page" src={column.image} alt={column.text}/>
                    </div>
                );
            })}          
            </div>
        </div>
        );
    }
}

export default InternalPages;