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
            <center>
                <div>
                    <h2>PALETTE</h2>
                    <ul>
                        {this.state.colorsLists.map(colorArray => {
                            return this.createColorList(colorArray);
                        })}
                    </ul>
                </div>
            </center>
        );
    }

}

export default ColorsList;