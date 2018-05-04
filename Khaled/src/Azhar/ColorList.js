import React, { Component } from 'react';
import './../reset.css';
import './work.css';


class ColorList extends Component {

    createColorList(){
        
        let colorList = this.props.colors.map(color =>  {
            return this.createColor(color);
        });
        return colorList;
    }

    createColor(color){
        return (<li><div className="color" style={{backgroundColor: color}} /></li>);
    }

    render() {
        return (
            <li>
                <div>
                    <ul className="horizontal colors">
                        {this.createColorList()}
                        <li className="color-text" style={{color: this.props.colors[0]}}>{this.props.colors[0]}</li>
                    </ul>
                </div>
                <br/>
            </li>
        );
    }
}

export default ColorList;


