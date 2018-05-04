import React, { Component } from 'react';
import './../reset.css';
import './work.css';

import ColorList from './ColorList';

class ColorsList extends Component {
    constructor(props){
        super(props);
        this.state = {colorsLists :[['#6b6b6b', '#959595', '#c0c0c0'],['#846a29', '#ba9a4a', '#dec380']]};
        console.log(this.state);
    }


    createColorList (colorArr){
        console.log(colorArr);
        return (
            <ColorList colors = {colorArr} />
        );
    }

    render() {
        return(
            <div className="section" id="font-colors">
            <div className="heading">
                <h1>01</h1>
                <div className="title">
                    <h2 style={{color: "#9075ab"}}>Font & colours</h2>
                    <br/>
                    <div style={{backgroundColor: "#e6e6e6"}} className="line"/>
                </div>
                <div id="fonts">
                    <br/>
                    <br/>
                    <div>Bahij</div>
                    <br/>
                    <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                    <br/>
                    <div>abcdefghijklmnopqrstuvwxyz</div>
                    <br/>
                    <div>1234567890</div>
                </div>
                    <div className="colors">
                        {this.state.colorsLists.map(colorArray => {
                            return this.createColorList(colorArray);
                        })}
                    </div>
                </div>
                </div>
        );
    }

}

export default ColorsList;