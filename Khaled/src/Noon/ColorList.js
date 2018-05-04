import React, { Component } from 'react';
import './../reset.css';
import './work.css';


class ColorList extends Component {

    createColorList(){
        let _colors = this.props.colors
            
        return (
            <div className="color-set">
                {this.createColor(_colors)}
                <div style={{color: _colors[0]}}>
                {_colors[0]}
                </div>
            </div>);
    }

    createColor(colors){
        if (colors.length === 0){
            return;
        }
        let color=colors[0];
        let _colors=colors.slice(0);
        _colors.shift();
        
    return (<div className="color" style={{backgroundColor: color}} >{this.createColor(_colors)}</div>);
    }

    render() {
        return this.createColorList();
    }
}

export default ColorList;


